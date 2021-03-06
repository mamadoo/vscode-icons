/* tslint:disable max-line-length */
import { languages } from './languages';
import { FileFormat, IFileCollection } from '../models';

export const extensions: IFileCollection = {
  default: {
    file: { icon: 'file', format: FileFormat.svg },
  },
  supported: [
    { icon: 'access', extensions: ['accdb', 'accdt', 'mdb', 'accda', 'accdc', 'accde', 'accdp', 'accdr', 'accdu', 'ade', 'adp', 'laccdb', 'ldb', 'mam', 'maq', 'mdw'], format: FileFormat.svg },
    { icon: 'actionscript', extensions: [], languages: [languages.actionscript], format: FileFormat.svg },
    { icon: 'ai', extensions: ['ai'], format: FileFormat.svg },
    { icon: 'ai2', extensions: ['ai'], format: FileFormat.svg, disabled: true },
    { icon: 'angular', extensions: ['.angular-cli.json', 'angular-cli.json'], filename: true, format: FileFormat.svg },
    { icon: 'ng_component_ts', extensions: ['component.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_component_js', extensions: ['component.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_controller_ts', extensions: ['controller.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_controller_js', extensions: ['controller.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_smart_component_ts', extensions: ['page.ts', 'container.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_smart_component_js', extensions: ['page.js', 'container.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_directive_ts', extensions: ['directive.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_directive_js', extensions: ['directive.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_pipe_ts', extensions: ['pipe.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_pipe_js', extensions: ['pipe.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_service_ts', extensions: ['service.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_service_js', extensions: ['service.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_module_ts', extensions: ['module.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_module_js', extensions: ['module.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_ts', extensions: ['routing.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_js', extensions: ['routing.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_ts', extensions: ['app-routing.module.ts'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_js', extensions: ['app-routing.module.js'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'ng_component_ts2', extensions: ['component.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_component_js2', extensions: ['component.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_smart_component_ts2', extensions: ['page.ts', 'container.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_smart_component_js2', extensions: ['page.js', 'container.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_directive_ts2', extensions: ['directive.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_directive_js2', extensions: ['directive.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_pipe_ts2', extensions: ['pipe.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_pipe_js2', extensions: ['pipe.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_service_ts2', extensions: ['service.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_service_js2', extensions: ['service.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_module_ts2', extensions: ['module.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_module_js2', extensions: ['module.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_ts2', extensions: ['routing.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_js2', extensions: ['routing.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_ts2', extensions: ['app-routing.module.ts'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_js2', extensions: ['app-routing.module.js'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'ansible', extensions: [], languages: [languages.ansible], format: FileFormat.svg },
    { icon: 'apache', extensions: [], languages: [languages.apache], format: FileFormat.svg },
    { icon: 'apib', extensions: [], languages: [languages.apib], format: FileFormat.svg },
    { icon: 'applescript', extensions: [], languages: [languages.applescript], format: FileFormat.svg },
    { icon: 'appveyor', extensions: ['appveyor.yml', '.appveyor.yml'], filename: true, format: FileFormat.svg },
    { icon: 'asp', extensions: [], languages: [languages.asp], format: FileFormat.svg },
    { icon: 'aspx', extensions: ['aspx', 'ascx'], format: FileFormat.svg },
    { icon: 'assembly', extensions: [], languages: [languages.assembly], format: FileFormat.svg },
    { // https://en.wikipedia.org/wiki/Audio_file_format
      icon: 'audio',
      extensions: ['aac', 'act', 'aiff', 'amr', 'ape', 'au', 'dct', 'dss', 'dvf', 'flac', 'gsm',
        'iklax', 'ivs', 'm4a', 'm4b', 'm4p', 'mmf', 'mogg', 'mp3', 'mpc', 'msv', 'oga', 'ogg', 'opus',
        'ra', 'raw', 'tta', 'vox', 'wav', 'wma'],
      format: FileFormat.svg,
    },
    { icon: 'aurelia', extensions: ['aurelia.json'], filename: true, format: FileFormat.svg },
    { icon: 'autohotkey', extensions: [], languages: [languages.autohotkey], format: FileFormat.svg },
    { icon: 'autoit', extensions: [], languages: [languages.autoit], format: FileFormat.svg },
    { icon: 'aws', extensions: [], format: FileFormat.svg },
    { icon: 'babel', extensions: ['.babelrc'], filename: true, format: FileFormat.svg },
    { icon: 'bat', extensions: [], languages: [languages.bat], format: FileFormat.svg },
    { // http://www.file-extensions.org/filetype/extension/name/binary-files
      icon: 'binary',
      extensions: ['a', 'app', 'bin', 'cmo', 'cmx', 'cma', 'cmxa', 'cmi', 'dll', 'exe', 'hl', 'ilk',
        'lib', 'n', 'ndll', 'o', 'obj', 'pyc', 'pyd', 'pyo', 'pdb', 'scpt', 'scptd', 'so'],
      format: FileFormat.svg,
    },
    { icon: 'bithound', extensions: ['.bithoundrc'], filename: true, format: FileFormat.svg },
    { icon: 'blade', extensions: [], languages: [languages.blade], format: FileFormat.svg },
    { icon: 'bower', extensions: ['.bowerrc', 'bower.json'], filename: true, format: FileFormat.svg },
    { icon: 'buckbuild', extensions: ['.buckconfig'], filename: true, format: FileFormat.svg },
    { icon: 'bundler', extensions: ['gemfile', 'gemfile.lock'], filename: true, format: FileFormat.svg },
    { icon: 'c', extensions: [], languages: [languages.c], format: FileFormat.svg },
    { icon: 'c2', extensions: [], languages: [languages.c], format: FileFormat.svg, disabled: true },
    { icon: 'cabal', extensions: [], languages: [languages.cabal], format: FileFormat.svg },
    { icon: 'cake', extensions: [], languages: [languages.cake], format: FileFormat.svg },
    { icon: 'cakephp', extensions: [], format: FileFormat.svg },
    { icon: 'cf', extensions: ['lucee'], languages: [languages.coldfusion], format: FileFormat.svg },
    { icon: 'cf2', extensions: ['lucee'], languages: [languages.coldfusion], format: FileFormat.svg, disabled: true },
    { icon: 'cfc', extensions: [], languages: [languages.cfc], format: FileFormat.svg },
    { icon: 'cfc2', extensions: [], languages: [languages.cfc], format: FileFormat.svg, disabled: true },
    { icon: 'cfm', extensions: [], languages: [languages.cfm], format: FileFormat.svg },
    { icon: 'cfm2', extensions: [], languages: [languages.cfm], format: FileFormat.svg, disabled: true },
    { icon: 'cheader', extensions: ['h'], format: FileFormat.svg },
    { icon: 'chef', extensions: ['chefignore', 'berksfile', 'berksfile.lock', 'policyfile'], filename: true, format: FileFormat.svg },
    { icon: 'class', extensions: ['class'], format: FileFormat.svg },
    { icon: 'circleci', extensions: ['circle.yml'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'clojure', extensions: ['cjm', 'cljc'], languages: [languages.clojure], format: FileFormat.svg },
    { icon: 'cmake', extensions: [], languages: [languages.cmake, languages.cmakecache], format: FileFormat.svg },
    { icon: 'cobol', extensions: [], languages: [languages.cobol], format: FileFormat.svg },
    { icon: 'codeclimate', extensions: ['.codeclimate.yml'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'codecov', extensions: ['codecov.yml', '.codecov.yml'], filename: true, format: FileFormat.svg },
    { icon: 'codekit', extensions: ['kit'], format: FileFormat.svg },
    { icon: 'codekit', extensions: ['config.codekit', 'config.codekit2', 'config.codekit3'], filename: true, format: FileFormat.svg },
    { icon: 'coffeescript', extensions: [], languages: [languages.coffeescript], format: FileFormat.svg },
    { icon: 'config', extensions: ['env'], light: true, languages: [languages.properties], format: FileFormat.svg },
    { icon: 'config', extensions: ['.env.example'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'compass', extensions: [], format: FileFormat.svg },
    { icon: 'composer', extensions: ['composer.json', 'composer.lock'], filename: true, format: FileFormat.svg },
    { icon: 'cpp', extensions: [], languages: [languages.cpp], format: FileFormat.svg },
    { icon: 'cpp2', extensions: [], languages: [languages.cpp], format: FileFormat.svg, disabled: true },
    { icon: 'cppheader', extensions: ['hpp'], format: FileFormat.svg },
    { icon: 'crystal', extensions: [], languages: [languages.crystal], format: FileFormat.svg },
    { icon: 'csharp', extensions: ['csx'], languages: [languages.csharp], format: FileFormat.svg },
    { icon: 'csproj', extensions: ['csproj'], format: FileFormat.svg },
    { icon: 'css', extensions: [], languages: [languages.css], format: FileFormat.svg },
    { icon: 'csslint', extensions: ['.csslintrc'], filename: true, format: FileFormat.svg },
    { icon: 'cssmap', extensions: ['css.map'], format: FileFormat.svg },
    { icon: 'cucumber', extensions: [], languages: [languages.cucumber], format: FileFormat.svg },
    { icon: 'dartlang', extensions: [], languages: [languages.dart], format: FileFormat.svg },
    { icon: 'delphi', extensions: [], languages: [languages.pascal], format: FileFormat.svg },
    { icon: 'dlang', extensions: [], languages: [languages.dlang], format: FileFormat.svg },
    { icon: 'diff', extensions: [], languages: [languages.diff], format: FileFormat.svg },
    { icon: 'docker', extensions: ['.dockerignore', 'docker-compose.yml', 'docker-cloud.yml'], filename: true, languages: [languages.dockerfile], format: FileFormat.svg },
    { icon: 'docker2', extensions: ['.dockerignore', 'docker-compose.yml', 'docker-cloud.yml'], filename: true, languages: [languages.dockerfile], format: FileFormat.svg, disabled: true },
    { icon: 'drone', extensions: ['.drone.yml', '.drone.yml.sig'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'editorconfig', extensions: ['.editorconfig'], filename: true, format: FileFormat.svg },
    { icon: 'ejs', extensions: ['ejs'], format: FileFormat.svg },
    { icon: 'elasticbeanstalk', extensions: [], format: FileFormat.svg },
    { icon: 'elixir', extensions: [], languages: [languages.elixir], format: FileFormat.svg },
    { icon: 'elm', extensions: ['elm-package.json'], filename: true, languages: [languages.elm], format: FileFormat.svg },
    { icon: 'elm2', extensions: ['elm-package.json'], filename: true, languages: [languages.elm], format: FileFormat.svg, disabled: true },
    { icon: 'emacs', extensions: ['el', 'elc'], format: FileFormat.svg },
    { icon: 'ember', extensions: ['.ember-cli'], filename: true, format: FileFormat.svg },
    { icon: 'eps', extensions: ['eps'], format: FileFormat.svg },
    { icon: 'erb', extensions: [], languages: [languages.erb], format: FileFormat.svg },
    { icon: 'erlang', extensions: ['emakefile', '.emakerfile'], filename: true, languages: [languages.erlang], format: FileFormat.svg },
    { icon: 'eslint', extensions: ['.eslintrc', '.eslintignore', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: FileFormat.svg },
    { icon: 'eslint2', extensions: ['.eslintrc', '.eslintignore', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'excel', extensions: ['xls', 'xlsx', 'xlsm', 'ods'], format: FileFormat.svg },
    { icon: 'favicon', extensions: ['favicon.ico'], filename: true, format: FileFormat.svg },
    { icon: 'firebase', extensions: ['.firebaserc'], filename: true, format: FileFormat.svg },
    { icon: 'flash', extensions: ['swf', 'swc'], format: FileFormat.svg },
    { icon: 'flow', extensions: ['js.flow'], format: FileFormat.svg },
    { icon: 'flow', extensions: ['.flowconfig'], filename: true, format: FileFormat.svg },
    { icon: 'font', extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot', 'pfa', 'pfb', 'sfd'], light: true, format: FileFormat.svg },
    { icon: 'fortran', extensions: [], languages: [languages.fortran], format: FileFormat.svg },
    { icon: 'fsharp', extensions: [], languages: [languages.fsharp], format: FileFormat.svg },
    { icon: 'fsproj', extensions: ['fsproj'], format: FileFormat.svg },
    { icon: 'freemarker', extensions: [], languages: [languages.freemarker], format: FileFormat.svg },
    { icon: 'fusebox', extensions: ['fuse.js'], filename: true,  format: FileFormat.svg },
    { icon: 'git', extensions: ['.gitattributes', '.gitconfig', '.gitignore', '.gitmodules', '.gitkeep'], filename: true, languages: [languages.git], format: FileFormat.svg },
    { icon: 'gitlab', extensions: ['.gitlab-ci.yml'], filename: true, format: FileFormat.svg },
    { icon: 'go', extensions: [], languages: [languages.go], format: FileFormat.svg },
    { icon: 'godot', extensions: [], languages: [languages.godot], format: FileFormat.svg },
    { icon: 'gradle', extensions: ['gradle'], format: FileFormat.svg },
    { icon: 'graphql', extensions: [], languages: [languages.graphql], format: FileFormat.svg },
    { icon: 'graphviz', extensions: [], languages: [languages.graphviz], format: FileFormat.svg },
    { icon: 'groovy', extensions: [], languages: [languages.groovy], format: FileFormat.svg },
    { icon: 'groovy2', extensions: [], languages: [languages.groovy], format: FileFormat.svg, disabled: true },
    { icon: 'grunt', extensions: ['gruntfile.js'], filename: true, format: FileFormat.svg },
    { icon: 'gulp', extensions: ['gulpfile.js'], filename: true, format: FileFormat.svg },
    { icon: 'haml', extensions: [], languages: [languages.haml], format: FileFormat.svg },
    { icon: 'handlebars', extensions: [], languages: [languages.handlebars], format: FileFormat.svg },
    { icon: 'handlebars2', extensions: [], languages: [languages.handlebars], format: FileFormat.svg, disabled: true },
    { icon: 'haskell', extensions: [], languages: [languages.haskell, languages.literatehaskell], format: FileFormat.svg },
    { icon: 'haskell2', extensions: [], languages: [languages.haskell, languages.literatehaskell], format: FileFormat.svg, disabled: true },
    { icon: 'haxe', extensions: ['haxelib.json'], filename: true, languages: [languages.haxe], format: FileFormat.svg },
    { icon: 'haxecheckstyle', extensions: ['checkstyle.json'], filename: true, format: FileFormat.svg },
    { icon: 'haxedevelop', extensions: ['hxproj'], format: FileFormat.svg },
    { icon: 'html', extensions: [], languages: [languages.html], format: FileFormat.svg },
    { icon: 'idris', extensions: ['idr', 'lidr'], format: FileFormat.svg },
    { icon: 'idrisbin', extensions: ['ibc'], format: FileFormat.svg },
    { icon: 'idrispkg', extensions: ['ipkg'], format: FileFormat.svg },
    { icon: 'image', extensions: ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'tiff', 'ico'], format: FileFormat.svg },
    { icon: 'ini', extensions: [], languages: [languages.ini], light: true, format: FileFormat.svg },
    { icon: 'infopath', extensions: ['infopathxml', 'xsn', 'xsf', 'xtp2'], format: FileFormat.svg },
    { icon: 'ionic', extensions: ['ionic.project', 'ionic.config.json'], filename: true, format: FileFormat.svg },
    { icon: 'jar', extensions: ['jar'], format: FileFormat.svg },
    { icon: 'java', extensions: [], languages: [languages.java], format: FileFormat.svg },
    { icon: 'jbuilder', extensions: ['jbuilder'], format: FileFormat.svg },
    { icon: 'jenkins', extensions: ['jenkinsfile'], filename: true, format: FileFormat.svg },
    { icon: 'jest', extensions: ['jest.json', 'jest.config.json', '.jestrc'], filename: true, format: FileFormat.svg },
    { icon: 'jinja', extensions: [], languages: [languages.jinja], format: FileFormat.svg },
    { icon: 'js', extensions: [], languages: [languages.javascript], format: FileFormat.svg },
    { icon: 'js_official', extensions: [], languages: [languages.javascript], format: FileFormat.svg, disabled: true },
    { icon: 'jsconfig', extensions: ['jsconfig.json'], filename: true, format: FileFormat.svg },
    { icon: 'jshint', extensions: ['.jshintrc', '.jshintignore'], filename: true, format: FileFormat.svg },
    { icon: 'jsmap', extensions: ['js.map'], format: FileFormat.svg },
    { icon: 'json', extensions: [], languages: [languages.json, languages.textmatejson], format: FileFormat.svg },
    { icon: 'json_official', extensions: [], languages: [languages.json, languages.textmatejson], format: FileFormat.svg, disabled: true },
    { icon: 'json2', extensions: [], languages: [languages.json, languages.textmatejson], format: FileFormat.svg, disabled: true },
    { icon: 'jsp', extensions: ['jsp'], format: FileFormat.svg },
    { icon: 'julia', extensions: [], languages: [languages.julia], format: FileFormat.svg },
    { icon: 'julia2', extensions: [], languages: [languages.julia], format: FileFormat.svg, disabled: true },
    { icon: 'karma', extensions: ['karma.conf.js', 'karma.conf.coffee'], filename: true, format: FileFormat.svg },
    { icon: 'kitchenci', extensions: ['.kitchen.yml'], filename: true, format: FileFormat.svg },
    { icon: 'kotlin', extensions: [], languages: [languages.kotlin], format: FileFormat.svg },
    { icon: 'layout', extensions: ['master', 'layout.html', 'layout.htm'], format: FileFormat.svg },
    { icon: 'layout', extensions: ['layout.html', 'layout.htm'], filename: true, format: FileFormat.svg },
    { icon: 'lerna', extensions: ['lerna.json'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'less', extensions: [], languages: [languages.less], format: FileFormat.svg },
    { icon: 'license', extensions: ['enc'], format: FileFormat.svg },
    { icon: 'license', extensions: ['license', 'licence', 'license.md', 'licence.md', 'license.txt', 'licence.txt'], filename: true, format: FileFormat.svg },
    { icon: 'lisp', extensions: [], languages: [languages.lisp], format: FileFormat.svg },
    { icon: 'lime', extensions: ['hxp'], format: FileFormat.svg },
    { icon: 'lime', extensions: ['include.xml'], filename: true, format: FileFormat.svg },
    { icon: 'locale', extensions: [], format: FileFormat.svg },
    { icon: 'log', extensions: ['log'], format: FileFormat.svg },
    { icon: 'lsl', extensions: ['lsl'], format: FileFormat.svg },
    { icon: 'lua', extensions: [], languages: [languages.lua], format: FileFormat.svg },
    { icon: 'lync', extensions: ['crec', 'ocrec'], format: FileFormat.svg },
    { icon: 'makefile', extensions: ['makefile'], format: FileFormat.svg },
    { icon: 'makefile', extensions: [], languages: [languages.makefile], format: FileFormat.svg },
    { icon: 'map', extensions: ['map'], format: FileFormat.svg },
    { icon: 'markdown', extensions: ['mdown', 'markdown'], languages: [languages.markdown], format: FileFormat.svg },
    { icon: 'marko', extensions: [], languages: [languages.marko], format: FileFormat.svg },
    { icon: 'markojs', extensions: ['marko.js'], format: FileFormat.svg },
    { icon: 'matlab', extensions: ['fig', 'mex', 'mexn', 'mexrs6', 'mn', 'mum', 'mx', 'mx3', 'rwd', 'slx', 'slddc', 'smv', 'tikz', 'xvc'], languages: [languages.matlab], format: FileFormat.png },
    { icon: 'meteor', extensions: [], format: FileFormat.svg },
    { icon: 'mustache', extensions: ['mustache', 'mst'], light: true, format: FileFormat.svg },
    { icon: 'nim', extensions: [], languages: [languages.nim], format: FileFormat.svg },
    { icon: 'njsproj', extensions: ['njsproj'], format: FileFormat.svg },
    { icon: 'node', extensions: ['.nvmrc'], filename: true, format: FileFormat.svg },
    { icon: 'node2', extensions: [], format: FileFormat.svg, disabled: true },
    { icon: 'npm', extensions: ['.npmignore', '.npmrc', 'package.json'], filename: true, format: FileFormat.svg },
    { icon: 'nsi', extensions: [], languages: [languages.nsis], format: FileFormat.svg },
    { icon: 'nuget', extensions: ['nupkg', 'nuspec', 'psmdcp'], format: FileFormat.svg },
    { icon: 'nunjucks', extensions: ['nunj', 'njs'], languages: [languages.nunjucks], format: FileFormat.svg },
    { icon: 'objectivec', extensions: [], languages: [languages.objectivec], format: FileFormat.svg },
    { icon: 'ocaml', extensions: ['.merlin'], filename: true, languages: [languages.ocaml], format: FileFormat.svg },
    { icon: 'onenote', extensions: ['one', 'onepkg', 'onetoc', 'onetoc2', 'sig'], format: FileFormat.svg },
    { icon: 'opencl', extensions: ['cl', 'opencl'], format: FileFormat.svg },
    { icon: 'outlook', extensions: ['pst', 'bcmx', 'otm', 'msg', 'oft'], format: FileFormat.svg },
    { icon: 'paket', extensions: ['paket.dependencies', 'paket.lock', 'paket.references', 'paket.template', 'paket.local'], filename: true, format: FileFormat.svg },
    { icon: 'patch', extensions: ['patch'], format: FileFormat.svg },
    { icon: 'pdf', extensions: ['pdf'], format: FileFormat.svg },
    { icon: 'pdf2', extensions: ['pdf'], format: FileFormat.svg, disabled: true },
    { icon: 'perl', extensions: [], languages: [languages.perl], format: FileFormat.svg },
    { icon: 'perl2', extensions: [], languages: [languages.perl], format: FileFormat.svg, disabled: true },
    { icon: 'photoshop', extensions: ['psd'], format: FileFormat.svg },
    { icon: 'photoshop2', extensions: ['psd'], format: FileFormat.svg, disabled: true },
    { icon: 'php', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [languages.php], format: FileFormat.svg },
    { icon: 'php2', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [languages.php], format: FileFormat.svg, disabled: true },
    { icon: 'phpunit', extensions: ['phpunit.xml'], filename: true, format: FileFormat.svg },
    { icon: 'plantuml', extensions: ['pu', 'plantuml', 'iuml', 'puml'], format: FileFormat.svg },
    { icon: 'poedit', extensions: ['po', 'mo'], format: FileFormat.svg },
    { icon: 'polymer', extensions: [], languages: [languages.polymer], format: FileFormat.svg },
    { icon: 'postcss', extensions: ['postcss.config.js'], filename: true, languages: [languages.postcss], format: FileFormat.svg },
    { icon: 'powerpoint', extensions: ['pot', 'potx', 'potm', 'pps', 'ppsx', 'ppsm', 'ppt', 'pptx', 'pptm', 'pa', 'ppa', 'ppam', 'sldm', 'sldx'], format: FileFormat.svg },
    { icon: 'powershell', extensions: [], languages: [languages.powershell], format: FileFormat.svg },
    { icon: 'procfile', extensions: ['procfile'], filename: true, format: FileFormat.svg },
    { icon: 'prolog', extensions: ['pro', 'P'], languages: [languages.prolog], format: FileFormat.svg },
    { icon: 'protobuf', extensions: [], languages: [languages.protobuf], format: FileFormat.svg },
    { icon: 'protractor', extensions: ['protractor.conf.js'], filename: true, format: FileFormat.svg },
    { icon: 'publisher', extensions: ['pub', 'puz'], format: FileFormat.svg },
    { icon: 'puppet', extensions: [], languages: [languages.puppet], format: FileFormat.svg },
    { icon: 'pug', extensions: ['.jade-lintrc', '.pug-lintrc', '.jade-lint.json', '.pug-lintrc.js', '.pug-lintrc.json'], filename: true, languages: [languages.pug], format: FileFormat.svg },
    { icon: 'purescript', extensions: [], light: true, languages: [languages.purescript], format: FileFormat.svg },
    { icon: 'python', extensions: [], languages: [languages.python], format: FileFormat.svg },
    { icon: 'qlikview', extensions: ['qvd', 'qvw'], languages: [languages.qlik], format: FileFormat.svg },
    { icon: 'r', extensions: [], languages: [languages.r], format: FileFormat.svg },
    { icon: 'rails', extensions: [], format: FileFormat.svg },
    { icon: 'rake', extensions: ['rake'], format: FileFormat.svg },
    { icon: 'rake', extensions: ['rakefile'], filename: true, format: FileFormat.svg },
    { icon: 'raml', extensions: [], languages: [languages.raml], format: FileFormat.svg },
    { icon: 'razor', extensions: [], languages: [languages.razor], format: FileFormat.svg },
    { icon: 'reactjs', extensions: [], languages: [languages.javascriptreact], format: FileFormat.svg },
    { icon: 'reacttemplate', extensions: ['rt'], format: FileFormat.svg },
    { icon: 'reactts', extensions: [], languages: [languages.typescriptreact], format: FileFormat.svg },
    { icon: 'reason', extensions: [], languages: [languages.reason], format: FileFormat.svg },
    { icon: 'rest', extensions: [], languages: [languages.restructuredtext], format: FileFormat.svg },
    { icon: 'registry', extensions: ['reg'], format: FileFormat.svg },
    { icon: 'riot', extensions: [], languages: [languages.riot], format: FileFormat.svg },
    { icon: 'robotframework', extensions: [], languages: [languages.robot], format: FileFormat.svg },
    { icon: 'rollup', extensions: ['rollup.config.js', 'rollup.config.ts'], filename: true, format: FileFormat.svg },
    { icon: 'rspec', extensions: ['.rspec'], filename: true, format: FileFormat.svg },
    { icon: 'ruby', extensions: [], languages: [languages.ruby], format: FileFormat.svg },
    { icon: 'rust', extensions: [], languages: [languages.rust], format: FileFormat.svg },
    { icon: 'saltstack', extensions: ['sls'], format: FileFormat.svg },
    { icon: 'sass', extensions: ['sass'], format: FileFormat.svg },
    { icon: 'scala', extensions: [], languages: [languages.scala], format: FileFormat.svg },
    { icon: 'script', extensions: [], languages: [languages.vbscript], format: FileFormat.svg },
    { icon: 'scss', extensions: ['scssm'], languages: [languages.scss], format: FileFormat.svg },
    { icon: 'shaderlab', extensions: [], languages: [languages.shaderlab], light: true, format: FileFormat.svg },
    { icon: 'shell', extensions: ['fish'], languages: [languages.shellscript], format: FileFormat.svg },
    { icon: 'slim', extensions: [], languages: [languages.slim], format: FileFormat.svg },
    { icon: 'sln', extensions: ['sln'], format: FileFormat.svg },
    { icon: 'smarty', extensions: [], languages: [languages.smarty], format: FileFormat.svg },
    { icon: 'snyk', extensions: ['.snyk'], filename: true, format: FileFormat.svg },
    { icon: 'solidity', extensions: [], languages: [languages.solidity], format: FileFormat.svg },
    { icon: 'source', extensions: [], format: FileFormat.svg },
    { icon: 'sqf', extensions: [], languages: [languages.sqf], format: FileFormat.svg },
    { icon: 'sql', extensions: [], languages: [languages.sql, languages.plsql], format: FileFormat.svg },
    { icon: 'sqlite', extensions: ['sqlite', 'sqlite3', 'db3'], format: FileFormat.svg },
    { icon: 'sss', extensions: ['sss'], format: FileFormat.svg },
    { icon: 'style', extensions: [], format: FileFormat.svg },
    { icon: 'stylelint', extensions: ['.stylelintrc', 'stylelint.config.js', '.stylelintignore'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'stylus', extensions: [], languages: [languages.stylus], format: FileFormat.svg },
    { icon: 'storyboard', extensions: ['storyboard'], format: FileFormat.svg },
    { icon: 'svg', extensions: ['svg'], format: FileFormat.svg },
    { icon: 'swagger', extensions: [], languages: [languages.swagger], format: FileFormat.svg },
    { icon: 'swift', extensions: ['package.pins'], filename: true, languages: [languages.swift], format: FileFormat.svg },
    { icon: 'tcl', extensions: ['tcl', 'exp'], format: FileFormat.svg },
    { icon: 'terraform', extensions: ['tfstate'], languages: [languages.terraform], format: FileFormat.svg },
    { icon: 'testjs', extensions: ['test.js', 'spec.js', 'test.jsx', 'spec.jsx'], format: FileFormat.svg },
    { icon: 'testts', extensions: ['test.ts', 'test.tsx', 'spec.ts', 'spec.tsx'], format: FileFormat.svg },
    { icon: 'tex', extensions: ['texi'], languages: [languages.tex, languages.latex], light: true, format: FileFormat.svg },
    { icon: 'text', extensions: ['csv'], languages: [languages.plaintext], format: FileFormat.svg },
    { icon: 'textile', extensions: [], languages: [languages.textile], format: FileFormat.svg },
    { icon: 'tfs', extensions: ['.tfignore'], filename: true, format: FileFormat.svg },
    { icon: 'todo', extensions: ['todo'], light: true, format: FileFormat.svg },
    { icon: 'toml', extensions: [], languages: [languages.toml], format: FileFormat.svg },
    { icon: 'travis', extensions: ['.travis.yml'], filename: true, format: FileFormat.svg },
    { icon: 'tsconfig', extensions: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.spec.json', 'tsconfig.e2e.json'], filename: true, format: FileFormat.svg },
    { icon: 'tslint', extensions: ['tslint.json'], filename: true, format: FileFormat.svg },
    { icon: 'twig', extensions: [], languages: [languages.twig], format: FileFormat.svg },
    { icon: 'typescript', extensions: [], languages: [languages.typescript], format: FileFormat.svg },
    { icon: 'typescript_official', extensions: [], languages: [languages.typescript], format: FileFormat.svg, disabled: true },
    { icon: 'typescriptdef', extensions: ['d.ts'], format: FileFormat.svg },
    { icon: 'typescriptdef_official', extensions: ['d.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'vagrant', extensions: ['vagrantfile'], filename: true, format: FileFormat.svg },
    { icon: 'vash', extensions: ['vash'], format: FileFormat.svg },
    { icon: 'vb', extensions: [], languages: [languages.vb], format: FileFormat.svg },
    { icon: 'vbhtml', extensions: ['vbhtml'], format: FileFormat.svg },
    { icon: 'vbproj', extensions: ['vbproj'], format: FileFormat.svg },
    { icon: 'vcxproj', extensions: ['vcxproj'], format: FileFormat.svg },
    { icon: 'vhdl', extensions: [], languages: [languages.vhdl], format: FileFormat.svg },
    { // https://en.wikipedia.org/wiki/Video_file_format
      icon: 'video',
      extensions: ['3g2', '3gp', 'asf', 'amv', 'avi', 'divx', 'qt', 'f4a', 'f4b', 'f4p', 'f4v', 'flv',
        'm2v', 'm4v', 'mkv', 'mk3d', 'mov', 'mp2', 'mp4', 'mpe', 'mpeg', 'mpeg2', 'mpg', 'mpv', 'nsv',
        'ogv', 'rm', 'rmvb', 'svi', 'vob', 'webm', 'wmv'],
      format: FileFormat.svg,
    },
    { icon: 'view', extensions: [], format: FileFormat.svg },
    { icon: 'vim', extensions: ['.vimrc', '.gvimrc'], filename: true, languages: [languages.viml], format: FileFormat.svg },
    { icon: 'volt', extensions: [], languages: [languages.volt], format: FileFormat.svg },
    {
      icon: 'vscode',
      extensions: [
        'vscodeignore.json',
        'launch.json',
        'tasks.json',
        '.vscodeignore',
      ],
      filename: true,
      format: FileFormat.svg,
    },
    { icon: 'vsix', extensions: ['vsix'], light: true, format: FileFormat.svg },
    { icon: 'vue', extensions: [], languages: [languages.vue], format: FileFormat.svg },
    {
      icon: 'webpack',
      extensions: [
        'webpack.config.coffee',
        'webpack.config.base.coffee',
        'webpack.config.common.coffee',
        'webpack.config.dev.coffee',
        'webpack.config.development.coffee',
        'webpack.config.staging.coffee',
        'webpack.config.test.coffee',
        'webpack.config.prod.coffee',
        'webpack.config.production.coffee',
        'webpack.config.js',
        'webpack.config.base.js',
        'webpack.config.common.js',
        'webpack.config.dev.js',
        'webpack.config.development.js',
        'webpack.config.staging.js',
        'webpack.config.test.js',
        'webpack.config.prod.js',
        'webpack.config.production.js',
        'webpack.config.ts',
        'webpack.config.base.ts',
        'webpack.config.common.ts',
        'webpack.config.dev.ts',
        'webpack.config.development.ts',
        'webpack.config.staging.ts',
        'webpack.config.test.ts',
        'webpack.config.prod.ts',
        'webpack.config.production.ts',
        'webpack.config.babel.js',
        'webpack.config.base.babel.js',
        'webpack.config.common.babel.js',
        'webpack.config.dev.babel.js',
        'webpack.config.development.babel.js',
        'webpack.config.staging.babel.js',
        'webpack.config.test.babel.js',
        'webpack.config.prod.babel.js',
        'webpack.config.production.babel.js',
      ],
      filename: true,
      format: FileFormat.svg,
    },
    { icon: 'word', extensions: ['doc', 'docx', 'docm', 'dot', 'dotx', 'dotm', 'wll'], format: FileFormat.svg },
    { icon: 'wxml', extensions: ['wxml'], format: FileFormat.svg },
    { icon: 'wxss', extensions: ['wxss'], format: FileFormat.svg },
    { icon: 'xcode', extensions: ['xcodeproj'], format: FileFormat.svg },
    { icon: 'xib', extensions: ['xib'], format: FileFormat.svg },
    { icon: 'xliff', extensions: ['xliff', 'xlf'], format: FileFormat.svg },
    { icon: 'xml', extensions: ['pex', 'tmlanguage'], languages: [languages.xml], format: FileFormat.svg },
    { icon: 'xsl', extensions: [], languages: [languages.xsl], format: FileFormat.svg },
    { icon: 'yaml', extensions: ['yml'], languages: [languages.yaml, languages.textmateyaml], format: FileFormat.svg },
    { icon: 'yang', extensions: [], languages: [languages.yang], format: FileFormat.svg },
    { icon: 'yarn', extensions: ['yarn.lock', '.yarnrc', '.yarnclean', '.yarn-integrity', '.yarn-metadata.json', '.yarnignore'], filename: true, format: FileFormat.svg },
    { icon: 'zip', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: FileFormat.svg },
    { icon: 'zip2', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: FileFormat.svg, disabled: true },
  ],
};
