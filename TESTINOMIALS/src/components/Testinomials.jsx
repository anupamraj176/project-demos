import React from 'react'
import '../Testinomials.css'
import {useState} from 'react'

const Testinomials = () => {

    const [currentIndex , setCurrentIndex] = useState(0);

    const Testinomials = [
        {
            quote : "This is the best ever product i have ever been used",
            author : "John Doe"
        },
        {
            quote : "The quick brown fox jump over the lazy dog",
            author : "Anuaa"
        }
    ]

    const handlePrev = () => {
        setCurrentIndex((currentIndex + Testinomials.length-1) % Testinomials.length);
    }

    const handleNext = () => {
        setCurrentIndex((currentIndex + Testinomials.length+1) % Testinomials.length);
        // setCurrentIndex(currentIndex+1);
    }

  return (
    <div className='testinomials'>

        <div className='testinomial-quote'>
            {Testinomials[currentIndex].quote}
        </div>

        <div className='testinomial-autor'>
           - {Testinomials[currentIndex].author}
        </div>

        <div className='testinomial-nam'>

            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>

        </div>

    </div>
  )
}

export default Testinomials