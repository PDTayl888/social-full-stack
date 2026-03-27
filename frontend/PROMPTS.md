MOD 14 LAB 3
============
1.  A Cross Site Request Forgery attack involves sending a deceptive link to a local user so the users credentials are attached to the attackers authorization code. The attacker has to start the authorization process but stop it before it is finished so they can get the auth codes. When the attackers authorization code is combined with the victims credentials the attacker can login to the victims account. One simple and effective way to prevent the success of such an attack is to use a state parameter. The state parameter is expected by the authorization server and created by the client app. Even if a CSRF happens it won't be fully realized without the expected state parameter.
----------
2.  A redirect URI attack is similar to a CSRF attack in that it involves the attacker getting the victim to click a 
malicious link. The attacker creates a link that seems to be a legitimate login link. The link is able to redirect the sensitive authorization code to a designated route where the attacker is waiting to intercept it. The authorization server allows this to happen because of  weak confirmation protocol that only checks the domain, which 
the attacker has made sure will remain unchanged. The solution is to check additional dat such as the host and the full path.
----------
3.  As far as I am concerned implementing third party login options like google sign in is an expected standard. Developers don't really have a choice anymore. Unfortunately the security concerns simply must be dealt with. It is just a bad look to not have the option. Some users may, ironically, not trust a site that does not include such a third party option even if a custom login solution is actually more secure.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

MOD 16 LAB 1
=============
1.  CORS, or Cross Origin Resource Sharing is fairly simple. It is when data flows from one origin to another. Unfortunately the browser doesn't allow this sort of behavior. When an application is organized in a separate frontend and backend which are being served on their own separate localhosts, ex. localhost:3030 and localhost:5000 they are considered different origins by the browser and thus not allowed to share data. There two main ways to get around this limitation. The backend can be configured to accept data from the particular localhost that is serving the frontend. This is known as CORS headers method. Or the frontend can be configured to trick the backend in to thinking that data from the frontend is actually native to the backend. This is known as proxy.
--------------

2.  When api URLs are hardcoded into the client code they will break the application when it is deployed since the client will be trying to communicate with routes that only exist on the developers machine. In addition to breaking upon deployment it will also expose potentially sensitive architecture to the user. If these endpoints are stored in environment variables they will not be included in the code that users download to run your app. Deployment sites can securely decide what environment variable endpoints to use for deployment as well. Secret keys and ids should also be stored in env variables so the client user never has the option of seeing them as well.
---------------

3.  When using the fetch api you must explicitly write code to parse json data whereas axios does this automatically. Axios also has similar built in error handling features that would need to be explicitly coded when using fetch. Axios is both more secure and time saving for the developer.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

MOD 16 LAB 2
============
1.  Since REST APIs are designed with fixed endpoints you are forced to follow a specific architecture to retrieve desired data. You may be forced to visit an endpoint that not only includes the desired data but is only available as part of a much larger object. Or, conversely the desired data may be split between to separate endpoints, making it necessary to make additional calls to retrieve all of the desired data. These several calls themselves may involve the first problem of over fetching data we first discussed. GraphQL solves both of these problems by giving the client a way to specify exactly what data is desired, no more, no less, by using a proprietary query language, that 
is the Q(uery) L(anguage) in GraphQL.
---------------

2.  REST APIs use many different URLs to provide different data where GraphQL uses a single endpoint with a single schema that can be query with a precise language. As discussed earlier not only does this deal with under and over fetching it also provides type safety, allows for automation and is ultimately self documenting by the nature of the query language.

3.  Caching for REST APIs is simple because the http protocols basically grew up with REST in mind. They are tailor made for each other. GraphQL uses almost always POST methods followed by queries in a language essentially foreign to http protocols. This makes caching complex and inefficient. GraphQL relies on third party libraries to deal with caching. However of the data structures on the backend are sufficiently complex and highly interrelated the GraphQL QUery languages precision and efficiency more than makes up for it's shortcomings involved with caching. Instead of many inefficient REST API calls the same data can be retrieved with a single graphQL query.


