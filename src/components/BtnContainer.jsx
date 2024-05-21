const BtnContainer = ({ jobs, selectCurrentItem, currentItem }) => {
  return (
    <div className="btn-container">
      {
        jobs.map((item, index) => {
          return (
            <button
              key={item.id}
              typ="button"
              className={index === currentItem ? "job-btn active-btn" : "job-btn"}
              onClick={() => selectCurrentItem(index)}
            >
              {item.company}
            </button>
          )
        })
      }
    </div>
  )
}
export default BtnContainer