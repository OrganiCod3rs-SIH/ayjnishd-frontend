import React from "react";
import Cochlear1 from "../../images/cochlean1.png";
import Cochlear2 from "../../images/cochlean2.png";
import Image from "next/image";
const CochlearImplant = () => {
  return (
    <>
      <div className="container">
        <h1>What is a cochlear implant?</h1>
        <p>
          The cochlear implant is a prosthetic device, a part of which is
          surgically implanted inside the cochlea. Cochlear implants have been
          found to be beneficial for children and adults with severe to profound
          hearing loss and steeply sloping hearing loss who do not benefit
          adequately with hearing aids but have an intact auditory nerve. While
          a hearing aid provides amplified sound energy to the ear, the cochlear
          implant directly provides electrical stimulation to the nerve endings
          in the cochlea.
        </p>
        <h3>How does a cochlear implant work?</h3>
        <p>
          A Cochlear implant has an externally worn device which includes the
          microphone, speech processor and transmitting coil and an internal
          device which is surgically implanted in the skull and cochlea. The
          internal device consists of the receiver stimulator package and the
          electrodes.
        </p>
        <div className="row">
          <p>
            <b>
              Given below is a picture of a Nucleus cochlear implant device:
            </b>
          </p>
          <div className="col-sm">
            <Image
              src={Cochlear1}
              width="500px"
              height="250px"
              alt="cochlear1"
            />
          </div>
          <div className="col-sm">
            <Image
              src={Cochlear2}
              width="500px"
              height="250px"
              alt="cochlear2"
            />
          </div>
        </div>
        <h3>Working of a cochlear implant:</h3>
        <ul>
          <li>Sound is picked up by a microphone placed on the ear.</li>
          <li>
            The microphone converts the sound into electrical energy. This
            electrical signal is transmitted through a cable to the speech
            processor.
          </li>
          <li>
            The speech processor may be a body worn device or a ear level
            device. It analyses and digitises the sound into coded signals. This
            coding is done by the processor depending on how it is programmed.
            The speech processor decides how much current is to be sent into the
            cochlea so that the wearer will hear the sound. Different types of
            speech coding strategies are available on speech processors.
          </li>
          <li>
            The coded signal from the speech processor is sent to the
            transmitting coil worn on the head. This coil is held in place with
            a magnet. The transmitting coil sends the coded signal across the
            skin via radio frequency link, to the receiver stimulator package.
          </li>
          <li>
            The receiver- stimulator package is surgically fitted in the mastoid
            bone of the skull just behind the ear. The receiver stimulator
            package contains a magnet so that the transmitting coil and receiver
            are aligned with each other without any direct contact through the
            skin.
          </li>
          <li>
            The signal from the receiver stimulator package is sent to the
            electrode array which has been surgically put into the scala tympani
            of the cochlea. (Given below is a picture of an electrode array. The
            black bands are the electrodes)
          </li>
        </ul>
      </div>
    </>
  );
};

export default CochlearImplant;
