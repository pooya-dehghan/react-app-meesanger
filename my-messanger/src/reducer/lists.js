const Init = {
    name : '',
    messageList:[],  
    delete:false , 
    exploredUsers: [],
    id:[],
    conversation_id : -1 ,
    date : '',

}

export default function List (state = Init , action) {
    console.log('REDUCER PROSSES' ,state ,action)
    switch (action.type) {
        case 'SAVE_USERNAME' :
            return {
                    ...state,
                    name:  action.payload           
                }
            case 'GET_MESSAGE_LIST' :
                return {
                    ...state,
                    messageList: action.payload
                }
                
                    //  case 'DELETE_MESSAGE' :
                    //         let deletedmessage = state.messageList.filter((message, index) => {return index !== action.index} )
                            
                    //      return{
                    //          ...state,
                    //          messageList : deletedmessage
                    //      }
                    //     case 'NEW_MESSAGE' :
                    //         let NewMessageList =state.messageList
                    //         NewMessageList[action.index] = {
                    //             text :action.payload,
                    //             id : action.index
                    //         }
                    //         return {
                    //             ...state, 
                    //             messageList: NewMessageList
                    //         }

                        case 'Eplored_User' :
                            return{
                                ...state,
                                exploredUsers : action.payload
                                
                            }
                            case 'GETTING_ID' :
                                return{
                                    ...state,
                                    id: action.payload
                                }

                            case 'GET_CONVERSATION_ID' :
                                return{
                                    ...state,
                                    conversation_id: action.conversation_id,
                                }
                                

            default:
                return state
    }
}
