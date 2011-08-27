require('../lib/coa').Cmd()
    .name('bla')
    .title('Bla bla bla')
    .helpful()
    .opt()
        .name('long1').title('Long1')
        .short('l').long('long1')
        .act(function(opts) {
            console.log(opts.long1);
        })
        .end()
    .opt()
        .name('long2').title('Long2')
        .short('L').long('long2')
        .act(function(opts) {
            console.log(opts.long2);
        })
        .end()
    .parse(['--long1', '111', '--long2', '222']);
