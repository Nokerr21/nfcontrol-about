import './AboutComponent.css'


export function AboutComponent() {
    return (
        <div className="row">
            <label className="labl-about">ABOUT THIS PROJECT</label>
            <p className='about'>
                Welcome to my innovative project created as part of my engineering 
                thesis, which changes the way we control food quality! The application 
                enables convenient retrieval of information about food products from 
                NFC tags and QR codes, as well as saving data from QR codes to NFC tags 
                for product monitoring.
            </p>
            <p className='about'>
                <label className="label1">What is my project?</label>
                <span className="br"></span>
                My application has been designed to provide a unique tool for food 
                quality control. By allowing the storage of information on NFC tags 
                placed directly on product packaging, it offers users a convenient 
                way to monitor important product data. Customers can track expiration 
                dates, avoid expired and suspicious products.
            </p>
            <p className='about'>
                <label className="label1">Main Features:</label> <br/>
                <span className="br"></span>
                <label className="label2">1. Saving Information on NFC Tags: </label>
                The application allows for the quick saving of key data on NFC 
                tags, which are read from QR codes, such as expiration date, production 
                date, batch number, index, or other manufacturer information. <br/>
                <span className="br"></span>
                <label className="label2">2. Reading from NFC Tags: </label>
                With the NFC tag reading feature, users can quickly 
                access product information without having to browse poorly visible information 
                on the packaging, which can easily be damaged. <br/>
                <span className="br"></span>
                <label className="label2">3. QR Code Scanning: </label>
                Additionally, the application allows for scanning QR codes, 
                enabling even more detailed retrieval of product data or is useful if the product 
                is not tagged with NFC technology.
            </p>
            <p className='about'>
                <label className="label1">Why my application?</label> <br/>
                <span className="br"></span>
                <label className="label2">1. Quality Control: </label>
                I provide a tool that enables informed purchasing decisions based on 
                reliable product information. <br/>
                <span className="br"></span>
                <label className="label2">2. User-Friendly: </label>
                The intuitive interface makes using my application simple and enjoyable. <br/>
                <span className="br"></span>
                <label className="label2">3. Innovation: </label>
                The application utilizes modern technologies to deliver a comprehensive solution 
                for food quality control. Additionally, it is a web-based application, so you don't 
                have to worry about downloading or updating it.
            </p>
            <p className='about2'>
                Join my community dedicated to food quality! Track and control your grocery shopping 
                in a new, innovative way with NFControl.
            </p>
            
        </div>
    );
}