export default function Selection() {
    return(
        
        <div className="row mt-4">           
            <label htmlFor="nameInput" className="ms-3 col-sm-1 form-label">Name</label>
            <div className="col-sm-3">
                <input type="text" className="form-control border border-dark" name="nameInput" />
            </div>         
        </div>
    )
}