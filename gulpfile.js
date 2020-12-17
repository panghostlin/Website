/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Tuesday 18 February 2020 - 13:00:45
** @Filename:				gulpfile.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Tuesday 18 February 2020 - 13:04:12
*******************************************************************************/

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
	gulp.src('public/imagesOriginal/**')
	.pipe(imagemin())
	.pipe(gulp.dest('public/images/'))
);
