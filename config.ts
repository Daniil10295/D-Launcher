var publicKey = "-----BEGIN PUBLIC KEY-----\n" +
    "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAv2mbIOiWiWfSLzJCfUUA\n" +
    "+e5Yasopp6iTq1P48zyUA8v5JhiL5KU0KpgdXcN3k+5MXL+S5Zv/15cAEJUrfVBV\n" +
    "QoPpYOui5I4iZesETICnlAbXUY2kWFGDYV9YS6NedvHbi7O/BJdK8vIs+/UZGIcx\n" +
    "xsRduvXNuQS4IpaL2XBXcZHMdEhsgEXvfFFOKv0G2F50fPW1hLqOkQdxSrblCTUa\n" +
    "deo49rElfpn16g9w9k4Tspngcgy5qZeIxgMAL00O/Gu2q02VBWDhat1QXrpZOjsI\n" +
    "SNP2/4yn2WlfozjkA6bs29UsfN5OLQJnRgPU1JOz7n/HXwKr4n6+i4F+HTgkD0yL\n" +
    "ohu7Vmi2moa5aH3qKbM9mWSpIcWssHtFzOz0MnG/JYW2ARku3s3lA2pSF7yl/LzK\n" +
    "nlWYtHqA70mndmrbuw/N1LT/R5fExByrGZcelRKNb4hiao2s3fJ8+9P76k0jlbHo\n" +
    "zZeyfFweinSDoNbTlipXdww+wXhrIiu2pejRTsYNKB7sZN1vwGEmYHWFifbcjX7k\n" +
    "/4UmEMbTDtFRxtLWDDnCNhqEJkdFeMZNQeiWmGRG4onCLHxRB6rj/eYXhr/hJ97h\n" +
    "onykhJZ7rqHRTLRgMGFYIa17EyphoNK5JsXJWwlQwHXEGqQjuJa4QsbCLK0dBRFS\n" +
    "DITAkxKJg6ZTA9IHQLrhNfMCAwEAAQ==\n" +
    "-----END PUBLIC KEY-----\n"

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Aurora Launcher'
};

export const api = {
    ws: 'ws://46.138.247.75:1370/ws',
    web: 'http://46.138.247.75:1370',
    publicKey
};

export const appPath = '.aurora-launcher';

export const discordRPC = {
    appId: '1214685301793103902',
    default: {
        firstLineText: 'Тестирую лаунчер',
        secondLineText: 'Чувак, ты думал здесь что-то будет?',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ'
            }
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'Aurora Launcher',
        smallImageText: 'Minecraft'
    },
    profile: {  },
    game: {  }
};

