// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require clean-blog
//= require angular.min
//= require summernote.min
// require_tree .
//= require_self


angular.module('app', [])
    .controller('postsController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
        console.log($window.post_id);

        $http.get('/manage/posts/' + $window.post_id + ".json").success(function (data) {
            $scope.post = data;
        });

        $scope.submitForm = function (post) {
            post.body = $('.summernote').code();
            console.log(post);
            $http.put('/manage/posts/' + post.id + ".json", post);
        }

    }]);

$(document).ready(function () {
    $('.summernote').summernote({
        tabsize: 2
    });
});