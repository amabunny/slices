slices
======

The Feature Slices methodology CLI that you wanted to :)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/slices.svg)](https://npmjs.org/package/slices)
[![Downloads/week](https://img.shields.io/npm/dw/slices.svg)](https://npmjs.org/package/slices)
[![License](https://img.shields.io/npm/l/slices.svg)](https://github.com/amabunny/slices/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g slices
$ slices COMMAND
running command...
$ slices (-v|--version|version)
slices/0.0.1 win32-x64 node-v12.18.0
$ slices --help [COMMAND]
USAGE
  $ slices COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`slices hello [FILE]`](#slices-hello-file)
* [`slices help [COMMAND]`](#slices-help-command)

## `slices hello [FILE]`

describe the command here

```
USAGE
  $ slices hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ slices hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/amabunny/slices/blob/v0.0.1/src\commands\hello.ts)_

## `slices help [COMMAND]`

display help for slices

```
USAGE
  $ slices help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src\commands\help.ts)_
<!-- commandsstop -->
