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
There are _five_ current stand-out features in this site with others to be soon implemented:

1. 3D/ AR Model: This site showcases a 3D model of the concerned object(Cochlear Implant) on the home page. As of now, the 3D model is accessible on all machines giving an interactive 360 degree view of the product, however, it's AR functionality can just be used on iOS devices. The support for AR Core supported Android devices will be coming soon.
  The AR feature let's you place the object in your surrounding using [augmented reality](https://en.wikipedia.org/wiki/Augmented_reality) and enables you to inspect     it more closely. This feature was implemented using the [`model-viewer`](https://www.npmjs.com/package/@google/model-viewer) library. A USDZ file was provided along with the GLB file as USDZ files are required to render AR on iOS.
![image](https://user-images.githubusercontent.com/47386839/185782758-6eed847b-3b09-45b8-9730-63b7b945489b.png)

https://user-images.githubusercontent.com/47386839/185958497-759a9137-2fad-4626-9415-a3e1c0aa1b01.mp4

2. Chatbot: A chatbot is provided to get easy answers to common queries. The chatbot can be trained to add more features as per request. This was achieved using [_Rasa Open source_](https://rasa.com/) and deployed on Heroku for a 24*7 active service. It was then integrated to the website as a widget component. The chatbot can then be used to ask common queries like:
  - _How can you help me?_
  - _What are cochlear implants?_
  - _Who is eligible to apply?_

https://user-images.githubusercontent.com/47386839/186881091-aed638af-f033-403a-a6ee-3f9ad7bc5c64.mp4

3. Multi-lingual support: Our website can render the content in 19+ Indian languages. This is done with the help of Google Translate and provides the translated content within seconds. User can choose languages from a list including:
 - Hindi
 - Kannada
 - Punjabi
 - Nepali
 - Tamil
 and a lot more.
 
 4. Maps: Users can quickly check all the hospitals enrolled in the scheme near to them. This map is interactively displayed on the website. 
  ![image](https://user-images.githubusercontent.com/47386839/186882305-a83042c7-52e7-460e-8e3e-bc32befaa00f.png)
 
 5. Speech recognition: We also have a speech recognition model which can be used by users who can't type for any reason. They can simply ask their query through their microphone and an appropriate answer will be displayed.
 
 6. Read-aloud: Keeping user-accessibility in mind, we have a read-aloud feature which currently features two languages, English and Hindi, although more languages can be integrated. This feature reads aloud the content displayed on the users' screen. It really is helpful to any user with some kind of visual impairment and helps them navigate through the site.
 
 7. Admin panel: There's an additional site to manage all the user interaction. An admin can manage and view all the applications and feedbacks from the user and act on them accordingly.

 9. Check-hearing: Designed a series of questions that estimate the degree of hearing loss in an individual. _It is to be noted that the results for this test are not supposed to be taken 100% accurate._

 10. PDF Rendering: Dynamic PDF rendering so that if a new PDF is added by the government, it is automatically rendered without going through the hassles of integrating it again.

 11. NEWS API: An API designed to flash NEWS related to the ADIP scheme on the website.

 12. Floating contact button: A button to directly call the concerened representative so that a user who's having difficulty navigating through the site for any reason can directly get in touch with the representative. There's also support for mail and chatbot in the contact icon.

## How does this site act as an improvement to the previous one?
There are two crucial things we kept in mind while planning all of the former:
How to make the site much more accessible to the users?
How to increase the effectiveness of the site?
Getting to the first point first and blatantly quoting a Marvel quote from another universe ”With Great UX comes great Users”. Hence, user experience is the very first thing that we focused on. 
The tactics such as having an Omni - present navbar, with routes embedded to take users to the desired content would check that a user does not need to scroll through the website endlessly to find the exact content that they want as was the case with the existing website. Also, we are highly focusing on declustering and organizing the entire website so that to give it a neat look. These two points themselves will act as a boon to the existing UX. 
Apart from these, we have features like Chatbot, AR model, read-aloud feature, maps, speech-recognition. As it is an Indian government website, we take great pride in our country’s diversity and hence we made the site multi-lingual.
These are some of the promises we made in our short-listing presentation and we still stand strongly by them.


