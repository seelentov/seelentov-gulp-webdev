export const components = () => {
  return app.gulp.src(app.path.src.components)
  .pipe(app.gulp.dest(app.path.build.components))
}