import Hello from './components/Hello.js'

var hello = new Hello('Hello')

hello.say()
hello.later().then(() => hello.say())
