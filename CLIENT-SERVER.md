# How a web request gets served?

On the simplest level, the Web physically consists of the following components −

* Your personal computer − This is the PC at which you sit to see the web.

* A Web browser − A software installed on your PC which helps you to browse the Web.

* An internet connection − This is provided by an ISP(Internet Service Provider) and connects you to the internet to reach to any Website.

* A Web server − This is the computer on which a website is hosted.

* Routers & Switches − They are the combination of software and hardware who take your request and pass to appropriate Web server.

The Web is known as a **client-server system**. Your computer is the client and the remote computers that store electronic files are the servers.

![Client-Server Logo](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works/simple-client-server.png)

### How the Web Works
---
When you enter something like **_Google.com_** the request goes to one of many special computers on the Internet known as **_Domain Name Servers (DNS)_**. All these requests are routed through various routers and switches. The domain name servers keep tables of machine names and their IP addresses, so when you type in **_Google.com_** it gets translated into a number i.e its ip address, which identifies the computers that serve the Google Website to you.

When you want to view any page on the Web, you must initiate the activity by requesting a page using your browser. The browser asks a domain name server to translate the domain name you requested into an IP address. The browser then sends a request to that server for the page you want, using a standard called **_Hypertext Transfer Protocol or HTTP_**.

The server should constantly be connected to the Internet, ready to serve pages to visitors. When it receives a request, it looks for the requested document and returns it to the Web browser. When a request is made, the server usually logs the client's IP address, the document requested, and the date and time it was requested. This information varies server to server.

An average Web page actually requires the Web browser to request more than one file from the Web server and not just the HTML / XHTML page, but also any images, style sheets, and other resources used in the web page. Each of these files including the main page needs a URL to identify each item. Then each item is sent by the Web server to the Web browser and Web browser collects all this information and displays them in the form of Web page.

### In Short
---
We have seen how a Web client - server interaction happens. We can summarize these steps as follows −

1. A user enters a URL into a browser (for example, Google.com. This request is passed to a domain name server.

2. The domain name server returns an IP address for the server that hosts the Website (for example, 68.178.157.132).

3. The browser requests the page from the Web server using the IP address specified by the domain name server.

4. The Web server returns the page to the IP address specified by the browser requesting the page. The page may also contain links to other files on the same server, such as images, which the browser will also request.

5. The browser collects all the information and displays to your computer in the form of Web page.