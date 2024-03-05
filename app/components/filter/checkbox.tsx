import React from 'react'

const Checkbox = () => {
    return (
        <div className="form-control">
            <label className="cursor-pointer label gap-2">
                <input type="checkbox" 
                    className="checkbox checkbox-xs rounded-sm tab-border-2 border-black" />
                <span className="label-text text-base">Выпускники</span>
            </label>
        </div>
    )
}

export default Checkbox