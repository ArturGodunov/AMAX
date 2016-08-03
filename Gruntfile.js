module.exports = function(grunt) {
	grunt.initConfig({
		jade: {
			dist: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},
				files: {
					'dist/index.html': 'src/jade/index.jade',
					'dist/index1.html': 'src/jade/index1.jade',
					'dist/index2.html': 'src/jade/index2.jade',
					'dist/index3.html': 'src/jade/index3.jade',
					'dist/index4.html': 'src/jade/index4.jade',
					'dist/index5.html': 'src/jade/index5.jade',
					'dist/index6.html': 'src/jade/index6.jade',
					'dist/index7.html': 'src/jade/index7.jade',
					'dist/index8.html': 'src/jade/index8.jade',
					'dist/index9.html': 'src/jade/index9.jade',
					'dist/thanks.html': 'src/jade/thanks.jade',
					'dist/phone_popup.html': 'src/jade/phone_popup.jade'
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'dist/styles/styles.css': 'src/sass/layout.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 3 versions', 'ie 9', 'ie 10']
			},
			dist:{
				files:{
					'dist/styles/styles.css': 'dist/styles/styles.css'
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			html: {
				files: [
					'src/jade/**/*.jade'
				],
				tasks: ['jade:dist'],
				options: {
					spawn: false
				}
			},
			css: {
				files: [
                    'src/sass/**/*.scss'
                ],
				tasks: ['sass:dist', 'autoprefixer:dist'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'jade',
        'sass',
		'autoprefixer',
        'watch'
    ]);
};