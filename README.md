# Declarative-Forms-In-ASPNET-Core
This repo contains a project that allows for the building of HTML 5 forms programmatically on the server using ASP.Net Core 2.1 and ES6. This declarative approach to building forms on the server-side, can be useful in cases where these forms are managed externally, for example marketing forms declared in a CMS, or a database, or a json file, etc. 

![alt text](dynamic-form.png)

Forms declared on the server can be easily include on any ASP.Net page using a simple line such as:
```
@await Component.InvokeAsync("DynamicForm", new { formId = "footerForm1" })
```

The forms allow for custom form submission logic to be plugged in with ease. By default it includes numerouse built-in features, including: email sending capabilities, google re-captcha server-side validation, email recipients can be mapped to the form inputs' selected values, thus allowing dirrent recipients to recieve emails on form submissions depending on user selections. Also, the forms have show/hide mappings, which allows the showing/hiding of certain form controls based on the values selected in other form controls. There are also pre-populate mappings which is a feature that allows for the pre-population of certain form fields based on the url query string, url path or cookie.

The JavaScript is written in ES6 using fetch. It is bundled using webpack, producing two different files: one in ES6 (without transpilation) for modern browsers and one transpiled to ES5 and including all necessary polyfills to support the last 2 versions of all browsers (using @babel-loader's @babel/preset-env preset). The two bundled files (w and w/out the polyfills) are loaded conditiaonlly depending on whether the browser supports 'fetch'.
