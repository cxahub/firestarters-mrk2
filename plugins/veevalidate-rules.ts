import { defineRule } from "vee-validate";
import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
  //Single rule context.
  //defineRule('required', require)
  //defineRule('email', email)
  //Import all rules.
  Object.keys(rules)
    .filter((k) => k !== "default")
    .forEach((rule) => {
      defineRule(rule, rules[rule]);
      //console.log(rule);
    });
});
