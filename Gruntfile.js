module.exports = function (grunt) {
  // Configuração do Grunt
  grunt.initConfig({
    // Compilação do LESS
    less: {
      development: {
        files: {
          "dist/style.css": "src/style.less", // Destino: Origem
        },
      },
    },
    // Compressão do JavaScript
    uglify: {
      my_target: {
        files: {
          "dist/script.min.js": ["src/script.js"], // Destino: Origem
        },
      },
    },
  });

  // Carregar os plugins
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Registrar tarefas padrão
  grunt.registerTask("default", ["less", "uglify"]);
};
