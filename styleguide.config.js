const path = require("path");

module.exports = {
    propsParser: require('react-docgen-typescript').parse,
    components: 'src/components/**/{index,index2}.tsx',
    template: {
        favicon: "data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAANgJAADYCQAAAAAAAAAAAACYOkTgXyQq91sjKf9cIyn/XCMp/1wjKf9cIyn/XCMp/1wjKf9cIyn/XCMp/1wjKf9cIyn/WyIp/2EoKfeeYyvi4VVl95o7ReZeJCr4XCMp/1wjKf9cIyn/XCMp/1wjKf9cIyn/XCMp/1wjKf9cIyn/WyIp/2AnKficYSvm0JIt9+lYaP/jVmb4mjtF5V4kKvhcIyn/XCMp/1wjKf9cIyn/XCMp/1wjKf9cIyn/WyIp/2EoKficYSvm0ZMt+NSWLf/oWGj/6Vho/+JWZfiaO0XlXiQq+FsjKf9cIyn/XCMp/1wjKf9cIyn/WyIp/2AnKficYSvl0ZMt+NOVLf/TlS3/6Fho/+hYaP/pWGj/4lZm+Jo7ReVeJCr4XCMp/1wjKf9cIyn/WyIp/2AnKficYSvm0ZMt+NOVLf/TlS3/05Ut/+hYaP/oWGj/6Fho/+lYaP/jVmb4mjtF5V4kKvhcIyn/WyMp/2EnKficYSvm0ZMt+NSVLf/TlS3/05Ut/9OVLf/oWGj/6Fho/+hYaP/oWGj/6Vho/+JWZfiaO0XlXiMq+GAnKfmcYSvl0ZMt+NOVLf/TlS3/05Ut/9OVLf/TlS3/6Fho/+hYaP/oWGj/6Fho/+hYaP/pWGj/4lZl+Z09ReKcYCzj0ZMt+dOVLf/TlS3/05Ut/9OVLf/TlS3/05Ut/+hYaP/oWGj/6Fho/+hYaP/oWGj/6Fho/+lYaPXkWWSC0ZEugNOVLfTTlS3/05Ut/9OVLf/TlS3/05Ut/9OVLf/oWGj/6Fho/+hYaP/oWGj/6Fho/+hYaPToWGiD71NvDNSfKQvTlS2A05Ut89OVLf/TlS3/05Ut/9OVLf/TlS3/6Fho/+hYaP/oWGj/6Fho/+hYaPXoWGiD6VhnDOpUagDSmSoA05UuC9OVLYDTlS3005Ut/9OVLf/TlS3/05Ut/+hYaP/oWGj/6Fho/+hYaPXoWGiD6VhnDOlYZwAAAAAAAAAAANOVLgDTlS4L05UtgNOVLfTTlS3/05Ut/9OVLf/oWGj/6Fho/+hYaPToWGiD6VhnDOlYZwAAAAAAAAAAAAAAAAAAAAAA05UuANOVLgvTlS2A05Ut89OVLf/TlS3/6Fho/+hYaPXoWGiD6VhnDelYZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTlS4A05UuDNOVLYDTlS3005Ut/+hYaPPoWGiD6VhnC+lYZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANOVLgDTlS4L05UtgNOVLfLpWGeE6VhnDulYZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA05UuANOVLg3TlS2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAADwAAAB+AAAA/wAAAf+AAAP/wAAA==",
    },
    require: [path.resolve(__dirname, 'src/styleguidist/setup.ts')],
    skipComponentsWithoutExample: true,
    styleguideDir: path.resolve(__dirname, "docs"),
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'lib/styleguidist/Wrapper'),
        StyleGuideRenderer: path.join(__dirname, 'lib/styleguidist/StyleGuideRenderer'),

    }
};
