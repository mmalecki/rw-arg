# rw-arg
Be a good UNIX citizen and follow the conventions with this one weird trick!

```
var rwArg = require('rwArg')
var input = rwArg.readSync(process.argv[2])
```

Will:

  * if called either without any argument or with '-' as an argument, read
    input from stdin
  * if called with anything else, treat it as a file name to read input from

There are `rwArg.read`, `rwArg.readSync`, `rwArg.write` and `rwArg.writeSync`.
All have the same API `rw` itself has, except they apply those rules.
