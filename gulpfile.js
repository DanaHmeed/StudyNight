import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("copy-images", () => {
  return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"));
});

const runParcel = shell.task(["npx parcel starter/index.html"]);
gulp.task("default", gulp.series("copy-images", runParcel));

const test = shell.task(["npx mocha"]);
gulp.task("test", test);

const e2e = shell.task(["npx cypress run"]);
gulp.task("e2e", e2e);

gulp.task("build", gulp.series("default", "test", "e2e"));