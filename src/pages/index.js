import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";



const images = [
  {
    original: "img/gallery/1.jpg",
    thumbnail: "img/gallery/1.jpg",
  },
  {
    original: "img/gallery/2.jpg",
    thumbnail: "img/gallery/2.jpg",
  },
  {
    original: "img/gallery/3.jpg",
    thumbnail: "img/gallery/3.jpg",
  },
  {
    original: "img/gallery/4.jpg",
    thumbnail: "img/gallery/4.jpg",
  },
  {
    original: "img/gallery/5.jpg",
    thumbnail: "img/gallery/5.jpg",
  },
  {
    original: "img/gallery/6.jpg",
    thumbnail: "img/gallery/6.jpg",
  },
  {
    original: "img/gallery/7.jpg",
    thumbnail: "img/gallery/7.jpg",
  },
  {
    original: "img/gallery/8.jpg",
    thumbnail: "img/gallery/8.jpg",
  },
  {
    original: "img/gallery/9.jpg",
    thumbnail: "img/gallery/9.jpg",
  },
  {
    original: "img/gallery/10.jpg",
    thumbnail: "img/gallery/10.jpg",
  },
  {
    original: "img/gallery/11.jpg",
    thumbnail: "img/gallery/11.jpg",
  },
  {
    original: "img/gallery/12.jpg",
    thumbnail: "img/gallery/12.jpg",
  },
  {
    original: "img/gallery/13.jpg",
    thumbnail: "img/gallery/13.jpg",
  },
  {
    original: "img/gallery/14.jpg",
    thumbnail: "img/gallery/14.jpg",
  },
  {
    original: "img/gallery/15.jpg",
    thumbnail: "img/gallery/15.jpg",
  },
  {
    original: "img/gallery/16.jpg",
    thumbnail: "img/gallery/16.jpg",
  },

  {
    original: "img/gallery/17.jpg",
    thumbnail: "img/gallery/17.jpg",
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p>This is an independent customer review of Maestro Renovation LLC (maestro-renovation.com),
           <br></br>located at 27 Chatham St, Lynn, MA 01902, United States. This website reflects my own personal 
           experience and documented interactions with the company. It is not affiliated with, endorsed by, 
           or sponsored by Maestro Renovation in any way.</p>
       
          <h2>Legal Note:</h2>
          <p>This review reflects my personal experience and opinions as a homeowner. 
            All statements are based on events I personally observed, documents I received, and work performed in my home.
             Others may have different experiences.</p>

          <h1>Review</h1>
          <p>This is my personal review of Maestro Renovation LLC, whom I hired to do a complete renovation of my two-story house. They changed the flooring, demolished several walls, and redid two of my bathrooms, which included electrical, plumbing, and heating-related work as part of the renovation. Unfortunately, I couldn’t find a good way to post this review, so I created this page to share my personal, honest opinion based on my experience.
</p>
        
        



        {/* <p className="hero__subtitle">{siteConfig.tagline}</p>
              <h1 className="hero__title">Photo Gallery (In Progress)</h1>
          <h2>Some of the images are of the construction in progress</h2> */}
      </div>
    </header>
  );
}



export default function Home() {
  return (
    <Layout title="Customer Review of Maestro Renovation" description="This is an independent customer review of Maestro Renovation LLC (maestro-renovation.com),
located at 27 Chatham St, Lynn, MA 01902, United States. This website reflects my own personal experience and documented interactions with the company. It is not affiliated with, endorsed by, or sponsored by Maestro Renovation in any way.
">
      <HomepageHeader />
      <div
        style={{
          justifyContent: 'Left',
          alignItems: 'Left',
          height: '50vh',
          paddingLeft: '30px',
          paddingTop: '30px',
          paddingRight: '30px',
          fontSize: '18px',
        }}>
        {/* Render the imported component */}
        <h1>The Overall Experience</h1>
        <p>Working with their team was very difficult. I had to monitor everything daily and call the company’s owner several times a day. As a homeowner, I had to do a lot of handholding to ensure the work got done and met the standard. This was especially challenging with small kids at home. Their team would frequently complain that I was asking for too many fixes or being too demanding, but on this page, I hope to at least share some of the concerns I had about their work during the many months they worked on my house.</p>
​<br></br>
<br></br>
        <h1>Licenses and Permits</h1>    
        <p>
          One of the most significant issues I encountered was that the required permits were not obtained before work began. While working on the first floor, the City of Watertown discovered that no permits had been secured for any of the work. The City of Watertown later confirmed that electrical, plumbing, and other permits were required but had not been secured. Ultimately, the city put a Stop-Work order, making any future work impossible until the permits were secured.
<br></br>
<br></br>

Below is a screenshot of the stop work order:
<br></br>
<br></br>
<center><img src="img/content/no-permit.png" alt="no permit" width="1000"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Stop Work Order issued by City of Watertown due to lack of permits
</p>
</center>

        </p>

        While this was transpiring, I was on vacation with my family, so imagine how it felt when we came back to our home to find the first floor completely demolished, and no work could be done on it. 
    <center><video controls width="320" height="840" >
  <source src="/video/home-condition.mp4"/>
</video>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Video showing the condition of my home when I returned from vacation to find out that no work could be done due to lack of permits
</p>
</center>

<h1>Timing and Timelines
</h1>

<p>If you have a long-term project with their team, you might run into the same time management issues I did. Although we would agree for them to come at a specific time (let’s say 9 am), almost always, they would come at random hours. It could be 10 am, 11 am, or in the afternoon. While they had the flexibility to come on some Saturdays, their arrivals were inconsistent and unpredictable.
<br></br><br></br>



Talking about the project's timelines was pointless, since we would constantly run over what we originally planned. While it’s understandable that things change along the way, the most frustrating thing was the lack of focus: you might have just one person working on your project at a time, while there could have been more people doing the work.
​<br></br>
<br></br>

I will give a concrete example. Their team agreed to repaint the kitchen cabinets. It’s obviously an inconvenience for us as a family, since we couldn’t use the kitchen during the process. However, Maestro Renovation agreed to finish everything in two days. So, the first day a single person comes, they begin their work, and it becomes clear to me right away that there is no way they could finish this entire painting job in just two days. So I had to call the owner of Maestro Renovation and ask them to send this guy some help. They agreed, but the project still took longer than expected, even with additional help. Again, this should have been handled by the company, not left to me, a homeowner, to figure out how many people are needed to do the job.
</p>
​<br></br>
<br></br>
<h1>General Highlights</h1>

<p>There were more issues along the way that I could count. This review might be updated down the line as more things come back to me, but here are the episodes that stand out.
</p>

<h2>Incorrect Plumbing</h2>

<p>One significant challenge in finding a licensed plumber after the city's Stop Work order was that some plumbing work had already been performed before permits were obtained, and a licensed plumber was later required to inspect and correct the installation. 
​<br></br>
<br></br>
Below is a pipe that had to be later corrected by a licensed plumber:

​<br></br>
<br></br>

<center><img src="img/content/IMG_0829.jpg" alt="incorrect piping" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Incorrect piping that had to be later fixed by a licensed plumber
</p>
</center>

Here is how the finished pipe looks like:
<center><img src="img/content/IMG_2062.jpg" alt="incorrect piping" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
   Piping after inspection and correction by a licensed plumber
   </p>
</center>


</p>

<h2>Forgetting to Turn Off the Water</h2>
<p>As part of the project, Maestro Renovation cut a pipe that connects one of the kitchen sinks to the sewer, leaving it hanging on the open wall. Because they didn’t shut off the faucet, when we used the sink, water was pouring down the wall. Fortunately, I caught it fast enough:
</p>

<center><img src="img/content/IMG_0825.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Water pouring down the wall because the pipe was cut and the water wasn’t turned off
   </p>
</center>


<h2>Electrical Scare</h2>
<p>As part of the project, they removed a kitchen island that had several outlets. During the demolition process, Maestro Renovation didn’t fully disconnect and secure the wire, leaving it hanging in the basement. One day, their workers were working in the basement when one of them touched a wire, which connected to a copper pipe, sparking and making a hole in the pipe. Fortunately, we drained the water fairly quickly, and there wasn’t much water damage, but this unsecured wire created a potentially dangerous situation. It’s still not fully disconnected, but at least it’s isolated:
</p>

<center><img src="img/content/IMG_2058.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Copper pipe with a hole patched caused by an unsecured electrical wire touching it
   </p>
</center>
<center><img src="img/content/IMG_2059.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Wire that was originally left unsecured and caused the hole in the copper pipe
   </p>
</center>


<h2>Flooring</h2>
<p>This is one of the most frustrating issues that I am dealing with to this day. In my opinion, the flooring installation resulted in persistent squeaking despite repeated attempts to fix it. Although I was very clear about how important it is to me to have new, silent flooring, as soon as they put down the first set, I could hear squeaks nonstop. I can’t tell you how many hours they spent trying to fix it, but now it has to be done from under the floor. I will just say that the floor is still very loud while walking on it, and I will leave a few pictures to illustrate condition of the work as it appears from underneath:</p>

<center><img src="img/content/1.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Flooring installation as seen from underneath #1
   </p>
</center>

<center><img src="img/content/IMG_2064.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Flooring installation as seen from underneath #2
   </p>
</center>

<center><img src="img/content/IMG_2065.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Flooring installation as seen from underneath #3
   </p>
</center>

<center><img src="img/content/IMG_1972.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Flooring installation as seen from underneath #4
   </p>
</center>


<h2>Lack of Attention to Details</h2>
<p>As I mentioned before, their team required a lot of handholding and monitoring by homeowners. However, even with that, I had to deal with many issues during and after the renovation. Here are a few examples:
</p>

<h3>Garbage</h3>
<p>As a part of the renovation project, Maestro Renovation replaced two small parts of shingles on my roof. During the replacement, they had to throw away some old shingles, nails, and other garbage. So one of their workers went to my parking lot, where I had the garbage bins. There I had three storage bins and two garbage bins (one for recycling and one for landfill). 
​<br></br>
<br></br>
Here is a picture to illustrate: 
</p>
<center><img src="img/content/IMG_2069.jpg" alt=" " width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    My parking lot with garbage and storage bins
   </p>
</center>
<p>
  In this instance, the worker placed garbage into a storage bin rather than the designated trash bins.
  
</p>
<center><img src="img/content/IMG_2071.jpg" alt=" " width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Garbage mistakenly placed in a storage bin instead of trash bins
   </p>
</center>


<h3>Trims and Baseboards</h3>
<p>Baseboards and trims are an important part of any renovation. However, in my project, I had to talk to this contractor again to make sure they fix the trim and baseboards around the fireplace. While I understand they attempted to “save” the original trim around the fireplace, I wouldn’t call this an acceptable end product: </p>

<center><img src="img/content/6 2.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Trim around the fireplace that was not properly aligned
   </p>
</center>

<h3>Tiling</h3>
<p>Maestro Renovation renovated both our bathrooms: one on the 2nd floor and another on the 1st floor. What we asked of them on the first floor is to ensure there is a shelf inside the shower wall. We requested that the shelf have two compartments and look exactly like the one upstairs (they did the 2nd floor first).
​<br></br>
<br></br>
However, the final result did not match what we had clearly requested, and they made the shelf way smaller, so nothing could fit.
</p>
<center><img src="img/content/shelf.png" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Shower shelf on the 1st floor that is too small and doesn’t match the one on the 2nd floor
   </p>
</center>
<p>More importantly, instead of making a continuous tile pattern as we had upstairs on the shelf wall, they just slabbed one tile to cover the side of the shelf! 
  <br></br>
  <br></br>
  It looked completely out of place, as you can see:</p>
<center><img src="img/content/IMG_1300.jpeg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Shower shelf on the 1st floor that is too small and doesn’t match the one on the 2nd floor
   </p>
</center>
<p>So I requested that they redo the shelf, and they complied. However, even this rework couldn’t go without issues. While cutting the shelf, they damaged the tile. As I said earlier, I had to ask them to fix these issues again. I would like to note that they also expressed their grievances because I requested that the shelves be redone, and because of this request, they declined to complete the previously discussed fireplace tiling, stating that my requests were too demanding. Since we had already agreed to tile the fireplace (although no payment has been made yet), I had to cancel the fireplace tile order and handle the returns myself.
  <br></br>
  <br></br>
  But back to the bathroom tile:</p>
   <center><img src="img/content/2.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Shower shelf on the 1st floor after rework with damaged tile
   </p>
</center>

<p>While they filed a few of the spots, some still remain, so to achieve the end result I wanted (i.e., proper shelf size and no damage to the tiles), I should have been monitoring their work even more closely.
</p>

 <center><img src="img/content/IMG_2060.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}>
    Shower shelf on the 1st floor after rework with some spots still needing attention
   </p>
</center>
   
   <h2>Other Issues</h2>
   
   <p>As I said, there are more things I could cover, so instead of creating a separate section for those, I will just go through a few of them:
</p>

<h3>Repainting Door</h3>

<p>This part of the door had to be repainted about three times, since every time it was painted, they would close the door, so the paint would get stuck to the doorframe, leaving a spot.</p>

 <center><img src="img/content/12 2.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}> 
    Door that had to be repainted multiple times due to paint getting stuck to the doorframe
   </p>
</center>

<br></br>
<br></br>
<h3>“Why Fix If You Will Just Break It?”</h3>

<p>At the end of the project, I noticed that the newly repainted front door had an indentation in its trim from an open deadlock. Instead of fixing it, Maestro Renovation just painted over it. </p>

 <center><img src="img/content/15 2.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}> 
    Indentation on the front door trim that was just painted over instead of being fixed
   </p>
</center>
<p>When I asked to actually fix the indentation, I got a reply to the extent of “Why would you fix it if someone will just break it again?” I was stunned by this reply - what is the point of making anything look nice if it will just get broken? I replied that since we don’t usually use the front door (we use the back door most of the time), this indentation should definitely be fixed.
</p>

<br></br>
<br></br>
<h3>Straightening Walls</h3>

<p>While working on the 2nd floor, they demolished a wall closet to expand the room. It had a sloped ceiling, which had to be extended. Unfortunately, I fully relied on the contractor to do the work and only noticed that the extension was not straight after the walls and ceiling already been painted. Here is the final product:
</p>
 <center><img src="img/content/10.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}> 
    Wall that was not straight after being extended
   </p>
</center>



<br></br>
<br></br>
<h3>Siding</h3>

<p>After Maestro Renovation replaced a larger window in the 2nd-floor bathroom with a smaller one, they needed to fill the gap with siding. Luckily, I had plenty of siding left from another project. Here is how it looked after the contractor cut new siding and filled the hole:
</p>
 <center><img src="img/content/17 2.jpg" alt="" width="500"/>
<p style={{fontStyle: 'italic',
  color: 'grey'}}> 
    Siding that was cut and installed to fill the gap after window replacement
   </p>
</center>
<p>Fortunately, they agreed to fix it while finishing the siding around the other two windows. One could argue this wasn’t the finished product, but when the first floor's outdoor wall was opened (to also accommodate window removal), Maestro Renovation did not install any temporary siding to close the wall. I also wasn’t asked to put something temporary like this piece of siding since the new siding had to be cut to fill this hole. </p>
      </div>
      {/* <MyGallery/> */}
    </Layout>
  );
}
