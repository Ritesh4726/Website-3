//* Languages plugin gives you ability to change languages and use methods to get information from i18n.

import Vue from "vue";

var genericStyle = "font-weight: 800; padding: 2px 5px; color: white;";
var prefix = "PreMiD Website";

export default {
    install(Vue, options) {
        Vue.mixin({
            methods: {
                debugMessage: message => {
                    console.log(
                        `%c${prefix}%cINFO%c ${message}`,
                        genericStyle + "border-radius: 25px 0 0 25px; background: #596cae;",
                        genericStyle + "border-radius: 0 25px 25px 0; background: #5050ff;",
                        "color: unset;"
                    );
                },
                errorMessage: message => {
                    console.log(
                        `%c${prefix}%cERROR%c ${message}`,
                        genericStyle + "border-radius: 25px 0 0 25px; background: #596cae;",
                        genericStyle + "border-radius: 0 25px 25px 0; background: #ff5050;",
                        "color: unset;"
                    );
                },
                successMessage: message => {
                    console.log(
                        `%c${prefix}%cSUCCESS%c ${message}`,
                        genericStyle + "border-radius: 25px 0 0 25px; background: #596cae;",
                        genericStyle +
                        "border-radius: 0 25px 25px 0; background: #50ff50; color: black;",
                        "color: unset;"
                    );
                },
            },
        });
    },
};
