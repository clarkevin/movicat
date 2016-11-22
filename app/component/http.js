'use strict';

(function(angular) {
    var http = angular.module('angular.http.service', []);
    http.service('$HttpService', ['$window', '$document', function($window, $document) {
        this.jsonp = function(url, data, callback) {
            var querystring = url.indexOf('?') == -1 ? '?' : '&';
            for (var k in data) {
                querystring += k + '=' + data[k] + '&';
            }
            var cb = 'callback=';
            var funName = 'my_json_' + Math.random().toString().replace('.', '');
            var requestURL = url + querystring + cb + funName;
            $window[funName] = callback;
            var scriptElement = $document[0].createElement('script');
            scriptElement.src = requestURL;
            $document[0].body.appendChild(scriptElement);
        };
    }])
})(angular);
