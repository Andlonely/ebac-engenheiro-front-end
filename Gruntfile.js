module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })

    grunt.registerTask('olaGrunt', function() {
        setTimeout(function() 
        {console.log("Olá, Grunt")}
        , 3000)
    })
}