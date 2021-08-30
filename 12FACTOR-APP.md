# The Twelve-Factor App

In the modern era, software is commonly delivered as a service: called **_web apps_**, or **_software-as-a-service_**. The twelve-factor app is a methodology for building software-as-a-service apps. It is set of principles for building the scalable and performant, independent, and most resilient enterprise applications. It establishes the general principles and guidelines for creating robust enterprise applications. 

The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).

# The Twelve Factors

## **1. CodeBase**

The first principle of the Twelve-Factor Apps is that every application should have just a single codebase. However, multiple deployments are possible.

![codebase image](https://www.netsolutions.com/insights/wp-content/uploads/2021/02/12-Factor-app-says-every-app-should-have-single-codebase-1536x815.jpg.webp)

As per the 12 Factor Methodology, a deploy is a running instance of the app, for example, production, staging, or developer’s copy. Though different versions can be active in each deployment, the codebase shall remain the same across all deploys.

## **2. Dependencies**

The second 12-Factor App Dependencies principle says that your app might depend on external packages or libraries. Still, you should never think that these will be available on the target system. Therefore, an app must always declare all the dependencies and their correct versions explicitly.

## **3. Config**

Because an app’s config varies between several deploys, storing it as constants in code is a violation of 12 Factor. Please note that the “config” here doesn’t mean the app’s internal config as it doesn’t vary between deploys and is best stored in code.

An app that complies with 12 Factors, store config in environment variables (env vars or env). The reason is env is easy to change between the deploys without having to change the code. These environment variables are never grouped in a 12 Factor App but are managed independently for each deploy. The benefit of using this approach shows up when the app naturally expands into more deploys during its lifetime as this model scales up easily.

## **4. Backing Services**

In a 12-Factor App, Backing Services means any attached services that the app consumes over the network for executing its normal operations. These services can either be locally-managed or can be some third parties. For example, datastores like MySQL, caching systems like Memcached, or binary asset services like Amazon S3. An app that complies with 12 Factor methodology makes no distinction between these services and treats all like attached resources accessed using a URL or other credentials stored in config.

The 12 Factor rule says that if the location or connection details of such service changes, you shouldn’t need to make changes in the code. These details should be available in the config.

![backing services image](https://www.netsolutions.com/insights/wp-content/uploads/2021/02/Twelve-Factor-Apps-Backing-Services.jpg.webp)

## **5. Build, Release, Run**

Build, release, and run are three important stages of the Software Development Life Cycle. Let’s see what these stages are all about in the context of the 12 Factor apps:

![build-release-run image](https://www.netsolutions.com/insights/wp-content/uploads/2021/02/Build-Release-Run.jpg.webp)


* **Build:** It converts the code repo into an executable bundle of code called build, along with fetching vendor dependencies.

* **Release:** It takes the build and combines it with the current config of deploy. Therefore, this stage gives us build and config ready for execution.

* **Run:** It runs the app in an execution environment.

The Twelve Factor App rule says that there should be a strict separation between these stages to avoid code break or any other risk. This separation can be done using many modern tools, making maintaining the entire system as easy as possible.

## **6. Processes**

An app is executed in an execution environment as a collection of one or more processes. And 12 Factor processes are stateless and share nothing.

Therefore, any data that is required time and again must be stored in a stateful backing service. A 12 Factor Application never expects that anything cached will be there in the future for new requests. The principle focuses on increasing the system’s overall stability and scalability without making any impact on the actual application.

## **7. Port-Binding**

A Twelve-Factor App acts as a standalone service and doesn’t require runtime injection of a webserver in an execution environment to make a web-facing service.

It means that a web app that complies with Twelve-Factor principles is self-contained and doesn’t require any running or existing app server for the execution. The web application exports HTTP as a service by binding to a port and listens to coming in requests

## **8. Concurrency**

This 12 Factor principle is related to scaling the application, and it says you should deploy more copies of your application instead of making your app larger. Basically, it supports horizontal scaling of an app instead of vertical scaling.
This horizontally scalable and self-contained nature of 12 Factor App processes implies adding more concurrency is a reliable and easy option.

## **9. Disposability**

The 12 Factor App disposability principle focuses on maximizing an application’s robustness with fast startup and graceful shutdown. It states that an app’s processes are disposable, which means:

* These can start and end at a moment’s notice

* Are robust against sudden failure or app crash

* Can shut down gracefully

This provides various benefits to the app, like rapid deployment of code, fast elastic scaling, more agility for the release process, and robust production deploys.

## **10. Dev/Prod Parity**

The Twelve Factor App Methodology suggests that the development, staging, and production of an app should be as similar as possible to ensure that anyone can understand and release it. An app that complies with 12 Factors is designed for continuous deployment by keeping the following gaps as minimum as possible:

* **The Time Gap:** A developer can write a code and deploy it hours or just a few minutes later.

* **The Personnel Gap:** Programmers or owners of the code should be closely involved in deploying it.

* **The Tool Gap:** The tools used for development and production should be as similar as possible.

This eliminates the risk of bugs in a specific environment and makes processes organized and simple.

## **11. Logs**

The rule suggests treating logs as event streams. Logging is crucial for keeping a check on the behavior of your application. However, 12-Factor apps shouldn’t be concerned with the management of these logs.

Instead, it should treat log entries as event streams that are routed to a separate service for analysis and archival. The app logs will be written as standard outputs, but the execution environment will take care of its storage, capture, and archival. This system provides greater flexibility and power for introspecting the app’s behavior over time.

## **12. Admin Processes**

Though this rule is not related to developing services, it is more about managing your application but is still essential. It says that apps should run management or admin tasks in an identical environment as the app’s regular and long-running processes.

Also, it suggests using the execution environment’s built-in tool to run those scripts on the production server.