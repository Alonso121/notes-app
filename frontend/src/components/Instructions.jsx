import React from 'react'
import addNoteBtnImg from  "../images/addNoteBtn.png"
import userBtnImg from  "../images/userBtn.png"
import starImg from  "../images/star.png"
import checkEmptyBtn from  "../images/checkEmpty.png"
import deleteBtnImg from  "../images/deleteBtn.png"


const Instructions = () => {
    return (
        <div className="bg-gray-200 p-2 mt-6 z-50">
                <h1 className="text-xl font-semibold">Check the instructions to get started.</h1>
                <ul>
                    <li>- Add a new note by pressing the <img src={addNoteBtnImg} alt="addNoteBtn" className="inline" /> button.</li>
                    <li>- You can logout or delete your account by pressing the <img src={userBtnImg} alt="userBtn" className="inline" /> button.</li>
                    <li>- Click on the <img src={starImg} alt="star" className="inline" /> to mark the note as important.</li>
                    <li>- To mark a note ase complete click on the <img src={checkEmptyBtn} alt="Check empty" className="inline" />button.</li>
                    <li>- To delete a note, mark it as complete and click on the <img src={deleteBtnImg} alt="delete" className="inline" />button.</li>
                </ul>
            </div>
    )
}

export default Instructions
