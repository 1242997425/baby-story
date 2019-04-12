const gulp = require("gulp");
const gulpuglify = require("gulp-uglify");
const webserver = require("gulp-webserver");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

gulp.task("server", () => {
    return gulp.src("/index")
        .pipe(webserver({
            open: true,
            port: 8086,
            livereload: true,
            host: "169.254.19.66"
        }))
})

gulp.task("script", async() => {
    await gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: "es2015"
        })) //编译js
        .pipe(concat("main.js")) //合并js
        .pipe(gulpuglify()) //压缩js
        .pipe(gulp.dest("./build/js"))
})

gulp.task("default", gulp.parallel("script", "server"))