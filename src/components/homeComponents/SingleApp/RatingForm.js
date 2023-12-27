import React from 'react'

const RatingForm = () => {
  return (
    <form>
        <div className="select-rating">
            <select className="col-lg-2 bg-light px-2 py-2 my-2 border-0 rounded">
                <option value="">Select...</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
            </select>
        </div>
    </form>
  )
}

export default RatingForm