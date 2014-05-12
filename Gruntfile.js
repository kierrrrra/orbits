module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: [
                    'public/css/*.scss',
                    'public/css/**/*.scss'
                ],
                tasks: ['compass', 'notify:sass'],
                options: {
                    livereload: true
                }
            }
        },
        compass: {
            sass: {
                options: {
                    sassDir: "public/css",
                    cssDir: "public/css"
                }
            }
        },
        notify: {
            sass: {
                options: {
                    title: "SASS",
                    message: "Stylesheet compiled"
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: "public"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect')

    grunt.registerTask('default', ['connect', 'compass', 'watch']);
};