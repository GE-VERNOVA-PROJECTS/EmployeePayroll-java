class Apperror extends Error{
    constructor(message,statuscode=400)
    {
        super(message);
        this.statuscode=statuscode;
    }
}

module.exports=Apperror