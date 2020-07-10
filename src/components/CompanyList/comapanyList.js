import React, { Component } from 'react';
import axios from 'axios'
import Navbar from '../Navbar/navbar';
import './companyList.css'
class CompanyList extends Component
{
    state={
        companies:[],
        countries:['Select your country','India','CA','UK','Russia','Germany'],
        countryFilter:''
    }

    componentDidMount=()=>{
        // get company list from backend
        // var token= JSON.parse(localStorage.getItem('token'))
        // var token= localStorage.getItem('token')
        // console.log(token)
        axios.get('http://localhost:8000/company-list')
        .then((res)=>{
            // this.setState(res)
            // console.log(res)
            this.setState({companies:res.data})
            // console.log(this.state)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleChange=(e)=>{
        // console.log(e.target.value)
        if(e.target.value!=='Select your country')
            this.setState({...this.state,
                countryFilter:e.target.value
            })
        else{
            this.setState({...this.state,
                countryFilter:''
            })
        }
        console.log(this.state.countryFilter)
    }

    render(){
        const {companies}= this.state
        // console.log(this.state)
        const {countryFilter}=this.state
        return(
            <div className="row company-wrapper">
                <div className="col-md-12" style={{justifyContent:'left'}}>
                    <Navbar />
                </div>
                <div className="col-md-12" style={{justifyContent:'center',textAlign:"center"}}>
                    <h2 style={{fontWeight:'bold'}}>Engineering teams that fit your preferences</h2>
                    <h5 style={{fontWeight:'bold'}}>Search by culture, tech stack, values or perks. Sort by science-based match score</h5>
                </div>
                <div className="filters col-md-4 col-sm-12">
                    <div className="country-filters">
                        <form>
                                <select className="country-filter" id="country-filter">
                                    {this.state.countries.map((country,i)=><option key={i} onClick={this.handleChange} value={country}>{country}</option>)}
                                </select>
                        </form>
                    </div>
                    <div className="fa fa-search search"></div>
                </div>
                <div className="companies col-md-8 col-sm-12">
                    <div className="flex-container">
                        {companies.map((company,i)=>
                        {
                            const locations= company.location.replace('[','').replace(']','').split(',');
                            var countiesArray=locations.map((location,i)=>{
                                return(location.replace(/'/g,'').split('-')[1])
                            })
                            console.log(countiesArray);
                            if(countryFilter=='' || countiesArray.includes(countryFilter))
                           return(
                           <span key={i}>
                                <div className="col-md-6">
                                    <div className="card-container" >
                                        <div className="card" style={{display:'flex', flexDirection:'row',
                                        width:'100%',
                                        height:'70%',
                                        backgroundColor:'#e6e6ff',
                                        border:'none'
                                    }}>
                                            <div className="company-logo" style={{margin:'20px', width:"100px",
                                        height:'75px',justifyContent:'center'}}>
                                                <img className="col-md-3 company-image" style={{maxWidth:'100px', maxHeight:'100px'}} src={company.company_logo} alt="comapny logo"/>
                                            </div>
                                            <div className="company-details" style={{justifyContent:"right"}}>
                                                <h3
                                                className="card-title"
                                                style={{fontWeight:'bold'}}>{company.company_name}</h3>
                                                <div className="card-body" style={{margin:'-20px'}}>
                                                    {company.location.replace('[','').replace(']','').split(',').map((location,i)=>
                                                                <h6 key={i}>
                                                                    {location.replace(/'/g,'').replace('-',',')}
                                                                </h6>
                                                            )} 
                                                    <h5 style={{fontWeight:'bold'}}>{company.No_of_Openings} engineering jobs</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tech-stacks flex-conatiner">
                                            {(company.tech_stack.split(',').map((stack,i)=><span className='stack' key={i}>{stack.replace('[','').replace(']','').replace(/'/g,'')}</span>))}
                                        </div>
                                    </div> 
                                </div>   
                            </span>  
                           )}  
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyList