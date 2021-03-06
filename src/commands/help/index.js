/**
* @Author: dushaobin <smartmesh>
* @Date:   2017-03-31
* @Email:  dushaobin
* @Project: smt-cli
* @Last modified by:   smartmesh
* @Last modified time: 2017-03-31
*/


const helpUtil = require('../../utils/help');
const print = require('../../utils/print');
const Option = require('../../base/Option');

function printHelpInfo() {
    helpUtil.printCliHeader();
}

const helpCmd = new Option({
    name: 'help',
    command: '-h, --help',
    description: '帮助说明',
    actions: {
        'h;help': {
            action: (cmd) => {
                print.info(cmd.action);
                if (cmd.action) {
                    cmd.action();
                }
            },
        },
    },
});

helpCmd.printHelpInfo = printHelpInfo;

module.exports = helpCmd;
