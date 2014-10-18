{
    "name"         : "node-red-contrib-ldap",
    "version"      : "0.0.1",
    "description"  : "A LDAP search node for Node-RED",
    "dependencies": {
        LDAP: "1.2.0"
    },
    license: "Apache",
    "repository" : {
        "type":"git",
        "url":"https://github.com/hardillb/node-red-contrib-ldap.git"
    },
    "keywords": [ "node-red", "LDAP" ],
    "node-red"     : {
        "nodes": {
            "ldap": "99-ldap.js"
        }
    },
    "author": {
        "name": "Benjamin Hardill",
        "email": "hardillb@gmail.com",
        "url": "http://www.hardill.me.uk/wordpress/"
    }
}