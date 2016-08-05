(function() {
    'use strict';

    angular
        .module('app', [])
        .factory('PagerService', PagerService)
        .controller('ExampleController', ExampleController,['$scope', '$filter'],$scope);

    function ExampleController(PagerService,$scope) {
        var vm = this;

				$scope.datas =
					{"1985":{"Over$500":8967,"Under$500":15043},
					 "1986":{"Over$500":3954,"Under$500":13048},
					 "1987":{"Over$500":5902,"Under$500":22043},
					 "1988":{"Over$500":9032,"Under$500":25923},
					 "1989":{"Over$500":11967,"Under$500":24842},
					 "1990":{"Over$500":12747,"Under$500":25675},
					 "1991":{"Over$500":13254,"Under$500":26534},
					 "1992":{"Over$500":13988,"Under$500":27143},
					 "1993":{"Over$500":12788,"Under$500":26840},
					 "1994":{"Over$500":14368,"Under$500":28043},
					 "1995":{"Over$500":15967,"Under$500":29541},
					 "1996":{"Over$500":18764,"Under$500":36248},
					 "1997":{"Over$500":22966,"Under$500":40040},
					 "1998":{"Over$500":26984,"Under$500":44655},
					 "1999":{"Over$500":29385,"Under$500":48843},
					 "2000":{"Over$500":30964,"Under$500":55042},
					 "2001":{"Over$500":32871,"Under$500":61777},
					 "2002":{"Over$500":27842,"Under$500":47493},
					 "2003":{"Over$500":20654,"Under$500":37023},
					 "2004":{"Over$500":19291,"Under$500":35872},
					 "2005":{"Over$500":18849,"Under$500":27920},
					 "2006":{"Over$500":20724,"Under$500":27182},
					 "2007":{"Over$500":22118,"Under$500":25238},
					 "2008":{"Over$500":24141,"Under$500":25396},
					 "2009":{"Over$500":21502,"Under$500":24216},
					 "2010":{"Over$500":21851,"Under$500":24632},
					 "2011":{"Over$500":15668,"Under$500":28993},
					 "2012":{"Over$500":15978,"Under$500":29526},
					 "2013":{"Over$500":15615,"Under$500":27898},
					 "2014":{"Over$500":14954,"Under$500":28841},
					 "2015":{"Over$500":12651,"Under$500":24629},

				};
				$scope.year=Object.keys($scope.datas);


        vm.pager = {};
        vm.setPage = setPage;

        initController();

        function initController() {
            // initialize to page 1
            vm.setPage(1);
        }

        function setPage(page) {
            if (page < 1 || page > vm.pager.totalPages) {
                return;
            }

            // get pager object from service
            vm.pager = PagerService.GetPager(vm.year.length, page);

            // get current page of items
            vm.items = vm.year.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
        }
    }

    function PagerService() {
        // service definition
        var service = {};

        service.GetPager = GetPager;

        return service;

        // service implementation
        function GetPager(totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 10;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }
    }
})();
