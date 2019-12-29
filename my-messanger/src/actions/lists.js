
export const saveUsername =(email) =>({
     type: 'SAVE_USERNAME',
     payload: email,

})

export const GetMessageList = (messages,id) => ({
    type: 'GET_MESSAGE_LIST',
    payload: messages,
    id:id
})

 export const DeleteOption = (deletemessage ,index) => ({
     type: 'DELETE_MESSAGE',
     payload: deletemessage,
     index:index
 })
export const NewMessage = (newvalue ,index) =>({
    type: 'NEW_MESSAGE',
    payload: newvalue,
    index:index
})
export const EploredUsers = (user) =>({
    type: 'Eplored_User',
    payload:user,
})
export const GettingId = (id) =>({
    type: 'GETTING_ID',
    payload : id
})
export const GetConversationId = (conversation_id) => ({
    type: 'GET_CONVERSATION_ID', 
    conversation_id: conversation_id,
})
