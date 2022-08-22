> Recreation of [ADIP Cochlear Implant Site](http://adipcochlearimplant.in/) for SIH
___

# Contents : 
1. [What is this site about?](https://github.com/OrganiCod3rs-SIH/ayjnishd-frontend/edit/main/README.md#what-is-this-site-about)
2. [How to navigate around this site?](https://github.com/OrganiCod3rs-SIH/ayjnishd-frontend/edit/main/README.md#how-to-navigate-around-this-site)
3. [What does the Tech-Stack comprise of?](https://github.com/OrganiCod3rs-SIH/ayjnishd-frontend/edit/main/README.md#what-does-the-tech-stack-comprise-of)
4. [How were additional stand-out features implemented?](https://github.com/OrganiCod3rs-SIH/ayjnishd-frontend/edit/main/README.md#how-were-the-additional-stand-out-features-implemented)
5. [How does this site act as an improvement to the previous one?](https://github.com/OrganiCod3rs-SIH/ayjnishd-frontend/edit/main/README.md#how-does-this-site-act-as-an-improvement-to-the-previous-one)

## What is this site about?
This site is to exclusively garner information about Cochlear Implant under the ADIP scheme by the Indian Government. It enables children with high degree of hearing loss to procure cochlear implants under minimum costs. It can be used to schedule appointments, check application status, check eligibility criteria and other stuff.

![cochlear implant](https://user-images.githubusercontent.com/47386839/184935026-94482499-f78d-43f7-a93d-4cd1400a69ee.png)


## How to navigate around this site?
This site uses the modular component structure by _NextJS_ to seamlessly render the UI components which you can interact with. In a nutshell, the website consists of different routes which are added as tabs to the _navigation bar_. This _navigation bar_ can then be used to go to different pages within the website.


https://user-images.githubusercontent.com/47386839/185960398-863fda08-3792-4f39-86b0-e8c71ea876b9.mp4

A user can scroll through the website and interact with different contents:
- Apply for the scheme.
- Check application status.
- Go through the FAQ.
- Learn about the product and much more.

## What does the Tech-Stack comprise of?
It was taken into utmost care that this site adapts to the modern and latest development practices and technology. Hence the tech-stack used comprises of the following :
- Languages:
  1. Python
  2. JavaScript
  3. HTML
  
- Frameworks and Database:
  1. Rasa
  2. Model Viewer
  3. Docker
  4. ExpressJS
  5. PostgreSQL
  6. NextJS
  7. React

## How were the additional stand-out features implemented?
There are _two_ current stand-out features in this site with others to be soon implemented:

1. 3D/ AR Model: This site showcases a 3D model of the concerned object(Cochlear Implant) on the home page. As of now, the 3D model is accessible on all machines giving an interactive 360 degree view of the product, however, it's AR functionality can just be used on iOS devices. The support for AR Core supported Android devices will be coming soon.
  The AR feature let's you place the object in your surrounding using [augmented reality](https://en.wikipedia.org/wiki/Augmented_reality) and enables you to inspect     it more closely. This feature was implemented using the [`model-viewer`](https://www.npmjs.com/package/@google/model-viewer) library. A USDZ file was provided along with the GLB file as USDZ files are required to render AR on iOS.
![image](https://user-images.githubusercontent.com/47386839/185782758-6eed847b-3b09-45b8-9730-63b7b945489b.png)

https://user-images.githubusercontent.com/47386839/185958497-759a9137-2fad-4626-9415-a3e1c0aa1b01.mp4

2. Chatbot: A chatbot is provided to get easy answers to common queries. The chatbot can be trained to add more features as per request. This was achieved using [_Rasa Open source_](https://rasa.com/) and deployed on Heroku for a 24*7 active service. It was then integrated to the website as a widget component. The chatbot can then be used to ask common queries like:
  - _How can you help me?_
  - _What are cochlear implants?_
  - _Who is eligible to apply?_

- [ ] _Insert a demo video for chatbot_


## How does this site act as an improvement to the previous one?
_TBD_

