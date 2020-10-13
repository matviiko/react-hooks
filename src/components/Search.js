import React, {useContext, useState} from "react";
import {AlertContext} from "../contex/alert/alertContext";
import {GithubContext} from "../contex/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)


    const onSubmit = event => {
        if(event.key !== 'Enter') {
            return
        }
        github.clearUser()

        if(value.trim()) {
            github.search(value.trim())
            alert.hide()
        } else {
            alert.show('Please enter user name!')
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter profile name"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}