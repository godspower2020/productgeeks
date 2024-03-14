import React from 'react'

const UsabilityForm = ({usability, onRatingChange}) => {
  return (
    <div className="select-rating">
        <select 
          value={usability}
          onChange={(e) => onRatingChange('usability', parseInt(e.target.value, 10))}
          className="col-lg-6 bg-light px-2 py-2 my-2 border-0 rounded"
          required
        >
            <option value="">Select...</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
        </select>
    </div> 
  )
}

const FunctionalityForm = ({functionality, onRatingChange}) => {
  return (
    <div className="select-rating">
        <select 
          value={functionality}
          onChange={(e) => onRatingChange('functionality', parseInt(e.target.value, 10))}
          className="col-lg-6 bg-light px-2 py-2 my-2 border-0 rounded"
          required
        >
            <option value="">Select...</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
        </select>
    </div> 
  )
}

const VisualDesignForm = ({visualDesign, onRatingChange}) => {
  return (
    <div className="select-rating">
        <select 
          value={visualDesign}
          onChange={(e) => onRatingChange('visualDesign', parseInt(e.target.value, 10))}
          className="col-lg-6 bg-light px-2 py-2 my-2 border-0 rounded"
          required
        >
            <option value="">Select...</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
        </select>
    </div> 
  )
}

export {UsabilityForm, FunctionalityForm, VisualDesignForm}