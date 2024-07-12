const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "https://mobile.sonar.bb-fnds.com/",
        options: {
            "sonar.login": "test",
            "sonar.password": "test",
            "sonar.projectName": "react_app",
            "sonar.projectDescription": "Just for demo...",
            "sonar.sourceEncoding":"UTF-8",
            "sonar.sources": "./src",
            "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
            "sonar.exclusions": "**/*.test.tsx",
            "sonar.tests":"./src",
            "sonar.testExecutionReportPaths":"test-report.xml",
            "sonar.javascript.lcov.reportPaths":"coverage/lcov.info"
        },
    },
    () => process.exit()
);
