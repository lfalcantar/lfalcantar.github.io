// Gruntfile.js
//after creating this file:npm install grunt --save-dev
//install extentions for gruntfile:npm install grunt-contrib-watch grunt-contrib-sass --save-dev
module.exports = function (grunt) {
    grunt.initConfig({
      // Watch task config
    watch: {
        sass: {
            files: "css/*.scss",
            tasks: ['sass:dev','cssmin','stripCssComments']
        }
    },
    sass: {
        dev: {
            files: {
                // destination    // source file
                "css/main.css" : "css/main.scss"
            }
        }
    },
    stripCssComments: {
        dist: {
            files: {
                'css/main.css': 'css/main.css'
            }
        }
    },
    browserSync: {
        default_options: {
            bsFiles: {
                src: [
                    "css/*.css",
                    "*.html"
                ]
            },
            options: {
                watchTask: true,
            }
        }
    },
    cssmin: {
        options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1,
            processImport: false
        },
        target: {
            files: {
                'css/main.css': ['css/main.css']
            }
        }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-strip-css-comments');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Launch BrowserSync + watch task
    grunt.registerTask('default', ['browserSync', 'watch']);
  };