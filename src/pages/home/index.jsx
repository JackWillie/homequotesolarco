import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { Range } from "react-range"
import Layout from "../../components/Layout"

import littleShade from "../../assets/images/little-shade.webp"
import lotShade from "../../assets/images/lot-of-shade.webp"
import noShade from "../../assets/images/no-shade.webp"
import uncertain from "../../assets/images/uncertain.webp"

import {formatPhoneNumber} from "../../utils"

const tempList = ['City of Dover', 'Cleveland Electric Illum Co', 'Dayton Power & Light Co', 'Duke Energy Ohio', 'Ohio Edison', 'Ohio Power Co', 'Adams Rural Electric', 'AEP Ohio', 'Buckeye Rural Electric', 'Butler Rural Electric', 'Carroll Electric Cooperative', 'City of Amherst', 'City of Arcanum', 'City of Bowling Green', 'City of Bryan', 'City of Celina', 'City of Cleveland', 'City of Columbiana', 'City of Columbus', 'City of Custar', 'City of Cuyahoga Falls', 'City of Galion', 'City of Hamilton', 'City of Hubbard', 'City of Hudson', 'City of Jackson', 'City of Lebanon', 'City of Mendon', 'City of Napoleon', 'City of Newton Falls', 'City of Niles','City of Oberlin','City of Orrville','City of Painesville','City of Piqua','City of Shelby','City of St Clairsville','City of St Marys', 'City of Tipp City', 'City of Wadsworth', 'City of Wapakoneta', 'City of Westerville', 'City of Woodsfield', 'Clyde Light & Power', 'Consolidated Electric','Darke Rural Electric','Duke', 'Firelands Electric', 'Frontier Power Company', 'GuernseyMuskingum Electric', 'HancockWood Electric', 'HolmesWayne Electric', 'Licking Rural Electric', 'Logan County Power & Light', 'LorainMedina REC', 'MidOhio Energy', 'Midwest Electric', 'North Central Electric', 'North Western Electric', 'Owen Electric', 'Owens', 'Pioneer Rural Electric', 'Prospect Corporation', 'Seville Board of Public Affairs', 'South Central Power Company', 'South Vienna Corporation', 'Tricounty Rural Elec Coop, Inc', 'Union Rural Electric', 'Village of Arcadia', 'Village of Beach City', 'Village of Bethel', 'Village of Bloomdale', 'Village of Bradner', 'Village of Brewster', 'Village of Carey', 'Village of Cygnet', 'Village of Deshler', 'Village of Edgerton', 'Village of Eldorado', 'Village of Elmore', 'Village of Genoa', 'Village of Georgetown', 'Village of Glouster', 'Village of Grafton', 'Village of Greenwich', 'Village of Hamersville', 'Village of Haskins', 'Village of Jackson Center', 'Village of Lakeview', 'Village of Lodi', 'Village of Lucas', 'Village of Marshallville', 'Village of Milan', 'Village of Minster', 'Village of Minster', 'Village of Monroeville', 'Village of Montpelier', 'Village of New Bremen', 'Village of New Knoxville', 'Village of Oak Harbor', 'Village of Obetz', 'Village of Ohio City', 'Village of Pemberville', 'Village of Pioneer', 'Village of Plymouth', 'Village of Republic', 'Village of Ripley', 'Village of Shiloh', 'Village of Sycamore', 'Village of Tontogany', 'Village of Versailles', 'Village of Waynesfield', 'Village of Wellington', 'Village of Wharton', 'Village of Woodville', 'Village of Yellow Springs', 'Washington Electric', 'OTHER PROVIDER'];

export default function Index() {

	const navigate = useNavigate();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	
  	const [step, setStep] = useState('home')

  	const [city, setCity] = useState('')
  	const [state, setState] = useState('')
  	const [ipAddress, setIpAddress] = useState('')



  const [saveValues, setSaveValues] = useState([500])
  const [zipCode, setZipCode] = useState('')

  const [billValues, setBillValues] = useState([101]);
  
  const [list, setList] = useState(tempList);

  const [provider, setProvider] = useState('');
  const [address, setAddress] = useState('');
  const [showClear, setShowClear] = useState(false);

  const [roofShade, setRoofShade] = useState(1)


  const [email, setEmail] = useState('');

  const [inValidEmail, setInValidEmail] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [inValidFistName, setInValidFistName] = useState(false);
  const [inValidLastName, setInValidLastName] = useState(false);
  
  const [phone, setPhone] = useState('');
  const [inValidPhone, setInValidPhone] = useState(false);

  const setWholeInfomation = () => {
	let request = new URLSearchParams();
	request.append("originDomain", "solaire.affiliate.com");
	request.append("leadBy", "mehdi");
	request.append("offer", "Solar");
	request.append("lp_campaign_id", "6323bacb64a7e");
	request.append("lp_campaign_key", "NLJRF6rmy3Dd72nHM8Vb");
	request.append("electricity_provider", provider);
	request.append("tcpa_text", "By clicking the “SUBMIT” button, you authorize our partners to call you and send you pre-recorded messages and text message at the number you entered above, using an autodialer, with offers about their products or services, even if your phone number is on any national or state “Do Not Call” list. Message and data rates may apply. Your consent here is not based on a condition of purchase.");
	request.append("tcpa_optin", "Yes");
	request.append("landing_page", "https://magreno.leadshook.io/survey/solar-panels-v1");
	request.append("subid", "12");
	request.append("url", "https://www.solarprogram2023.com/survey/solar");
	request.append("lp_s2", "12");
	request.append("first_name", firstName);
	request.append("last_name", lastName);
	request.append("phone_home",phone);
	request.append("trusted_form_cert_id", "https://cert.trustedform.com/e6f7b66487d2f77810ca0e2bb8b2434f729be4ff");
	request.append("homeowner", "");
	request.append("average_monthly_electric_bill", "$" + billValues[0]);
	request.append("email_address", email);
	request.append("address", address);
	request.append("city", city);
	request.append("state", state);
	request.append("zip_code", zipCode);
	request.append("ip_address", ipAddress);
	request.append("credit", "");
	request.append("roof_shade", roofShade === 1 ? "No Shade" : (roofShade === 2 ? "Partial Shade" : (roofShade === 3 ? "Full Shade" : "Not Sure")));
	request.append("user_agent", "");
	request.append("type_of_home", '');
	request.append("average_monthly_electric", "$" + billValues[0]);
	request.append("homeowner_px", "");
	request.append("roof_shade_px", roofShade === 1 ? "Full sun" : (roofShade === 2 ? "Partial sun" : (roofShade === 3 ? "Mostly Shade" : "Not Sure")));
	request.append("headline", "");
	request.append("leadid_token", "A994C180-479D-7DFE-9968-75AF0800278D");
	request.append("jornaya_lead_id", "A994C180-479D-7DFE-9968-75AF0800278D");
	request.append("fbclid", searchParams.get('fbclid'));
	request.append("event_id", `${Math.floor(Math.random() * 100000) +1000000}_${Math.floor(Math.random() * 900000000) + 100000000}_enter`);
	request.append("client_user_agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36");  
	request.append("cid", "");
	
	fetch('https://bingoleads.leadspediatrack.com/post.do', {
		method: 'POST',
		body: request,
		headers: {
		  'Content-Type': 'application/x-www-form-urlencoded'
		}
	  })
		.then(response => response.json())
		.then(data => {
			console.log(data);
			alert("Successfully Submitted!!!");
			navigate('/result');
		})
		.catch(error => console.error(error));
}

	useEffect(()=>{
		fetch('http://ip-api.com/json/')
		.then(response => response.json())
		.then(data => {
			setCity(data.city);
			setState(data.regionName);
			setIpAddress(data.query);
		});
	},[])

  const handleZipCode = (e) => {
	if(/^\d+$/.test(e.target.value) && e.target.value.length<=5){
		setZipCode(e.target.value);
	}
  }

  const calculate = () => {
	if(/^\d+$/.test(zipCode) && zipCode.length === 5){
		setStep('bill');
	}
  }

  const MouseOver = () => {
	setShowClear(true)
  }

  const MouseLeave = () => {
	setShowClear(false)
  }

  const goAddress = (provide) => {
	setProvider(provide);
	setStep('address')
  }

  const handleAddress = (e) => {
	setAddress(e.target.value);
  }

  const goRoof = () => {
	if(address !== ''){
		setStep('roof');
	}
  }

  const handleRoof = (val) => {
	setRoofShade(val);
	setStep('saveEmail');
  }

  const handleEmail = (e) => {
	setInValidEmail(false);
	setEmail(e.target.value);
  }

  const goWho = () => {
	if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
		setStep('who');
		setInValidEmail(false);
	}else{
		setInValidEmail(true);
	}
  }

  const handleFirstName = (e) => {
	setInValidFistName(false);
	setInValidLastName(false);
	setFirstName(e.target.value);
  }

  const handleLastName = (e) => {
	setInValidFistName(false);
	setInValidLastName(false);
	setLastName(e.target.value);
  }

  const goFinal = () => {
	if(firstName === ''){
		setInValidFistName(true);
		return;
	}

	if(lastName === ''){
		setInValidLastName(true);
		return;
	}

	setStep('final');
  }
  
  const handlePhone = (e) => {
	setInValidPhone(false);
	setPhone(formatPhoneNumber(e.target.value));
  }
  
  const submitAll = () => {
	if(phone.match(/\d/g) !== null && phone.match(/\d/g).length === 10 ){
		setStep('submitting');
		setWholeInfomation();
	} else {
		setInValidPhone(true);
		return;
	}
  }

  return (
	<Layout>
	{
		step === 'home' &&
		<div className='flex p-6 items-center justify-center text-2xl h-[100vh]'>
			<div className='w-[65%]'>
				<h1 className='font-[700] mb-[10px] text-white font-NotoSans text-[3.3vw] leading-relaxed'>California Program Offers Solar For $0 Down.</h1>
				<h2 className='font-[400] mb-[10px] text-white font-NotoSans text-[2vw] leading-relaxed'>Check How Much You Can Save</h2>
				<p className='font-[400] mb-[10px] text-white font-NotoSans text-[1.4vw] leading-relaxed'>Approximate Home Square Footage?</p>
				<div>
					<div className='flex justify-around items-center'>
						<span className='font-[400] mb-[10px] text-white font-NotoSans text-[20px]'>500 sq.ft</span>
						<Range
							step={1}
							min={500}
							max={3000}
							values={saveValues}
							onChange={(values) => {
								setSaveValues(values)
							}}
							renderTrack={({ props, children }) => (
								<div
									{...props}
									className="w-[70%] bg-[#FB7306] h-2 pr-2 my-4 rounded-md mx-3"
								>
									{children}
								</div>
							)}
							renderThumb={({ props }) => (
								<div
									{...props}
									className="w-7 h-7 transform translate-x-10 bg-[#FB7306] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								/>
							)}
						/>
						<span className='font-[400] mb-[10px] text-white font-NotoSans text-[20px]'>3000+ sq.ft</span>
					</div>
					<span className='font-[400] mb-[10px] text-white font-NotoSans text-[40px]'>{saveValues[0]} {saveValues[0] === 3000 && ' +'} sq.ft</span>
				</div>
				<div className='m-9 flex flex-wrap justify-center'>
					<input className='px-6 py-3 text-grey bg-white w-[250px] rounded-[50px] text-[20px] h-[50px] m-1' type="text" value={zipCode} onChange={handleZipCode} placeholder='Zip Code' />
					<button onClick={calculate} className='flex items-center justify-center px-[100px] py-3 text-grey bg-[#078041] hover:bg-[#FB7306] text-[15px] h-[50px] w-[250px] rounded-[50px] text-[white] m-1'>CALCULATE</button>
				</div>
			</div>
		</div>
	}
	{
		step === 'bill' && 
		<div className='flex p-6 items-center text-2xl bg-[#000000ab] h-[100vh] flex-col justify-between pt-[100px] pb-[50px]'>
			<div className='w-[500px] rounded-[50px]'>
				<div className='bg-[#ffffff1a] w-full py-[5px] relative rounded-[50px]'>
					<div className='bg-[#078041] w-[13%] h-full absolute top-0 left-0 rounded-[50px]'></div>
				</div>
				<p className='font-[400] mb-[10px] text-white font-NotoSans text-[12px] leading-relaxed my-2'>Your Savings Calculation is <span className='text-[#FB7306]'>13%</span> Complete</p>
			</div>
			<div className='w-[60%] text-center'>
				<h1 className='font-[700] mb-[10px] text-white font-NotoSans text-[3.3vw] leading-relaxed'>What is Your Average Electric Bill?</h1>
				<div className='flex justify-center mb-10'>
					<p className='font-[400] mb-[10px] text-white font-NotoSans text-[1.4vw] leading-relaxed w-[60%]'>We use this information to calculate your savings. Move the slider to select.</p>
				</div>
				<div>
					<div className='flex justify-around items-center'>
						<span className='font-[400] mb-[10px] text-white font-NotoSans text-[20px]'>$101</span>
						<Range
							step={1}
							min={101}
							max={800}
							values={billValues}
							onChange={(values) => {
								setBillValues(values)
							}}
							renderTrack={({ props, children }) => (
								<div
									{...props}
									className="w-[70%] bg-[#FB7306] h-2 pr-2 my-4 rounded-md mx-3"
								>
									{children}
								</div>
							)}
							renderThumb={({ props }) => (
								<div
									{...props}
									className="w-7 h-7 transform translate-x-10 bg-[#FB7306] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								/>
							)}
						/>
						<span className='font-[400] mb-[10px] text-white font-NotoSans text-[20px]'>$800+</span>
					</div>
					<span className='font-[400] mb-[10px] text-white font-NotoSans text-[40px]'>${billValues[0]} {billValues[0] === 800 && ' +'}</span>
				</div>
				
			</div>
			<div className='flex justify-center relative w-[90%]'>
				<p onClick={() => {setStep('home')}} className='font-[400] mb-[10px] text-white font-NotoSans text-[15px] absolute left-0 cursor-pointer'>BACK</p>
				<button onClick={() => setStep('provider')} className='flex items-center justify-center px-[100px] py-3 text-grey bg-[#078041] hover:bg-[#FB7306] text-[15px] h-[50px] w-[100px] rounded-[50px] text-[white] m-1'>NEXT</button>
			</div>
		</div>
	}
	{
		step === 'provider' && 
		<div className='flex p-6 items-center text-2xl bg-[#000000ab] h-[100vh] flex-col justify-between pt-[100px] pb-[50px] overflow-y-auto'>
			<div className='w-[500px] rounded-[50px]'>
				<div className='bg-[#ffffff1a] w-full py-[5px] relative rounded-[50px]'>
					<div className='bg-[#078041] w-[25%] h-full absolute top-0 left-0 rounded-[50px]'></div>
				</div>
				<p className='font-[400] mb-[10px] text-white font-NotoSans text-[12px] leading-relaxed my-2'>Your Savings Calculation is <span className='text-[#FB7306]'>25%</span> Complete</p>
			</div>
			<div className='w-[60%] text-center justify-center flex items-center flex-col'>
				<h1 className='font-[700] mb-[10px] text-white font-NotoSans text-[3.3vw] leading-relaxed'>Select Your Utility Provider</h1>
				<div className='flex justify-center mb-10'>
					<p className='font-[400] mb-[10px] text-white font-NotoSans text-[1.4vw] leading-relaxed w-[60%]'>We'll look up utility rates to calculate new savings</p>
				</div>
				<div className='w-[550px]'>
					{
						list.map((item, i)=>
							<button key={i} onClick={() => goAddress(item)} className='bg-transparent text-white text-[25px] border border-white rounded-[30px] w-[250px] px-7 py-3 m-2 hover:bg-[#FB7306]'>{item}</button>
						)
					}
				</div>
			</div>
			<div className='flex justify-center relative w-[90%] py-[30px]'>
				<p  onClick={() => {setStep('bill')}} className='font-[400] mb-[10px] text-white font-NotoSans text-[15px] absolute left-0'>BACK</p>
			</div>
		</div>
	}
	{
		step === 'address' && 
		<div className='flex p-6 items-center text-2xl bg-[#000000ab] h-[100vh] flex-col justify-between pt-[100px] pb-[50px]'>
			<div className='w-[500px] rounded-[50px]'>
				<div className='bg-[#ffffff1a] w-full py-[5px] relative rounded-[50px]'>
					<div className='bg-[#078041] w-[38%] h-full absolute top-0 left-0 rounded-[50px]'></div>
				</div>
				<p className='font-[400] mb-[10px] text-white font-NotoSans text-[12px] leading-relaxed my-2'>Your Savings Calculation is <span className='text-[#FB7306]'>38%</span> Complete</p>
			</div>
			<div className='w-[60%] flex flex-col items-center'>
				<h1 className='font-[700] mb-[10px] text-white font-NotoSans text-[3.3vw] leading-relaxed'>Your Street Address</h1>
				<div className='flex justify-center mb-10'>
					<p className='font-[400] mb-[10px] text-white font-NotoSans text-[1.4vw] leading-relaxed'>We'll lookup rebates and incentives for your home</p>
				</div>
				<div className='relative w-[600px]' onMouseLeave={MouseLeave} onMouseOver={MouseOver}>
					<input value={address} onChange={handleAddress} className='px-6 py-3 text-grey bg-white w-full rounded-[50px] text-[20px] h-[50px] m-1' type="text" placeholder='Type Here e.g. 123 West Main Road' />
					{
						address !== '' && showClear && 
						<span onClick={() => setAddress('')} className='absolute right-[15px] top-[10px] text-[#375c9b] text-[20px] font-bold cursor-pointer' >X</span>
					}
				</div>
				
			</div>
			<div className='flex justify-center relative w-[90%]'>
				<p onClick={() => {setStep('provider')}} className='font-[400] mb-[10px] text-white font-NotoSans text-[15px] absolute left-0 cursor-pointer'>BACK</p>
				<button onClick={goRoof} className='flex items-center justify-center px-[100px] py-3 text-grey bg-[#078041] hover:bg-[#FB7306] text-[15px] h-[50px] w-[100px] rounded-[50px] text-[white] m-1'>NEXT</button>
			</div>
		</div>
	}
	{
		step === 'roof' && 
		<div className='flex p-6 items-center text-2xl bg-[#000000ab] h-[100vh] flex-col justify-between pt-[100px] pb-[50px]'>
			<div className='w-[500px] rounded-[50px]'>
				<div className='bg-[#ffffff1a] w-full py-[5px] relative rounded-[50px]'>
					<div className='bg-[#078041] w-[50%] h-full absolute top-0 left-0 rounded-[50px]'></div>
				</div>
				<p className='font-[400] mb-[10px] text-white font-NotoSans text-[12px] leading-relaxed my-2'>Your Savings Calculation is <span className='text-[#FB7306]'>50%</span> Complete</p>
			</div>
			<div className='flex flex-col items-center'>
				<h1 className='font-[700] mb-[10px] text-white font-NotoSans text-[3.3vw] leading-relaxed'>Does Your Roof Get Sunlight?</h1>
				<div className='flex justify-center mb-10 w-full'>
					<p className='font-[400] mb-[10px] text-white font-NotoSans text-[1.4vw] leading-relaxed'>We'll calculate the best possible savings for your particular project.</p>
				</div>
				<div className='flex flex-wrap w-[900px] justify-center m-auto'>
					<div onClick={()=>handleRoof(1)} className={`${roofShade == 1 && 'bg-[#FB7306]'} w-[400px] bg-[#078041] hover:bg-[#FB7306] cursor-pointer h-[150px] rounded-md text-[white] justify-center grid items-center m-2`}>
						<img className='h-[70px] w-auto m-auto' src={noShade} alt='' />
						<p>Full Sunlight</p>
					</div>
					<div onClick={()=>handleRoof(2)} className={`${roofShade == 2 && 'bg-[#FB7306]'} w-[400px] bg-[#078041] hover:bg-[#FB7306] cursor-pointer h-[150px] rounded-md text-[white] justify-center grid items-center m-2`}>
						<img className='h-[70px] w-auto m-auto' src={littleShade} alt='' />
						<p>Some Shade</p>
					</div>
					<div onClick={()=>handleRoof(3)} className={`${roofShade == 3 && 'bg-[#FB7306]'} w-[400px] bg-[#078041] hover:bg-[#FB7306] cursor-pointer h-[150px] rounded-md text-[white] justify-center grid items-center m-2`}>
						<img className='h-[70px] w-auto m-auto' src={lotShade} alt='' />
						<p>Severe Shade</p>
					</div>
					<div onClick={()=>handleRoof(4)} className={`${roofShade == 4 && 'bg-[#FB7306]'} w-[400px] bg-[#078041] hover:bg-[#FB7306] cursor-pointer h-[150px] rounded-md text-[white] justify-center grid items-center m-2`}>
						<img className='h-[70px] w-auto m-auto' src={uncertain} alt='' />
						<p>Uncertain</p>
					</div>
				</div>
				
			</div>
			<div className='flex justify-center relative w-[90%]'>
				<p onClick={() => setStep('address')} className='font-[400] mb-[10px] text-white font-NotoSans text-[15px] absolute left-0 cursor-pointer'>BACK</p>
			</div>
		</div>
	}
	{
		step === 'saveEmail' &&
		<div className='flex p-6 items-center text-2xl bg-[#000000ab] h-[100vh] flex-col justify-between pt-[100px] pb-[50px] font-NotoSans'>
			<div className='w-[500px] rounded-[50px]'>
				<div className='bg-[#ffffff1a] w-full py-[5px] relative rounded-[50px]'>
					<div className='bg-[#078041] w-[63%] h-full absolute top-0 left-0 rounded-[50px]'></div>
				</div>
				<p className='font-[400] mb-[10px] text-white text-[12px] leading-relaxed my-2'>Your Savings Calculation is <span className='text-[#FB7306]'>63%</span> Complete</p>
			</div>
			<div className='flex flex-col items-center'>
				<h1 className='font-[700] mb-[10px] text-white text-[3.3vw] leading-relaxed'>Your Estimate Is Almost Ready!</h1>
				<div className='flex justify-center mb-10'>
					<p className='font-[400] mb-[10px] text-white text-[1.4vw] leading-relaxed'>We'll Deliver Your Exclusive Savings By Email</p>
				</div>
				<div className='w-[500px] text-left'>
					<input value={email} onChange={handleEmail} className='px-6 py-3 text-grey bg-white w-full rounded-[50px] text-[20px] h-[50px] m-1' type="text" placeholder='Email address' />
					{
						inValidEmail &&
						<span className='font-[400] mb-[10px] ml-5 text-white text-[14px] leading-relaxed' >Please Enter a Valid Email Address</span>
					}
				</div>
				
			</div>
			<div className='flex justify-center relative w-[90%]'>
				<p onClick={() => {setStep('roof')}} className='font-[400] mb-[10px] text-white text-[15px] absolute left-0 cursor-pointer'>BACK</p>
				<button onClick={goWho} className='flex items-center justify-center px-[100px] py-3 text-grey bg-[#078041] hover:bg-[#FB7306] text-[15px] h-[50px] w-[100px] rounded-[50px] text-[white] m-1'>NEXT</button>
			</div>
		</div>
	}
	{
		step === 'who' &&
		<div className='flex p-6 items-center text-2xl bg-[#000000ab] h-[100vh] flex-col justify-between pt-[100px] pb-[50px] font-NotoSans'>
			<div className='w-[500px] rounded-[50px]'>
				<div className='bg-[#ffffff1a] w-full py-[5px] relative rounded-[50px]'>
					<div className='bg-[#078041] w-[75%] h-full absolute top-0 left-0 rounded-[50px]'></div>
				</div>
				<p className='font-[400] mb-[10px] text-white text-[12px] leading-relaxed my-2'>Your Savings Calculation is <span className='text-[#FB7306]'>75%</span> Complete</p>
			</div>
			<div className='flex flex-col items-center'>
				<h1 className='font-[700] mb-[10px] text-white text-[3.3vw] leading-relaxed'>Who Is This Estimate For?</h1>
				<div className='flex justify-center mb-10'>
					<p className='font-[400] mb-[10px] text-white text-[1.4vw] leading-relaxed'>We Take Privacy Seriously. No Spam Ever!</p>
				</div>
				<div className='flex'>
					<div className='w-[250px] text-left m-1'>
						<input value={firstName} onChange={handleFirstName} className='px-6 py-3 text-grey bg-white w-full rounded-[50px] text-[20px] h-[50px] m-1' type="text" placeholder='Enter first name' />
						{
							inValidFistName &&
							<span className='font-[400] mb-[10px] ml-5 text-white text-[14px] leading-relaxed' >Please Enter Your First Name</span>
						}
					</div>
					<div className='w-[250px] text-left m-1'>
						<input value={lastName} onChange={handleLastName} className='px-6 py-3 text-grey bg-white w-full rounded-[50px] text-[20px] h-[50px] m-1' type="text" placeholder='Enter last name' />
						{
							inValidLastName &&
							<span className='font-[400] mb-[10px] ml-5 text-white text-[14px] leading-relaxed' >Please Enter Your Last Name</span>
						}
					</div>
				</div>
				
			</div>
			<div className='flex justify-center relative w-[90%]'>
				<p onClick={() => setStep('saveEmail')} className='font-[400] mb-[10px] text-white text-[15px] absolute left-0 cursor-pointer'>BACK</p>
				<button onClick={goFinal} className='flex items-center justify-center px-[100px] py-3 text-grey bg-[#078041] hover:bg-[#FB7306] text-[15px] h-[50px] w-[100px] rounded-[50px] text-[white] m-1'>NEXT</button>
			</div>
		</div>
	}
	{
		step === 'final' &&
		<div className='flex p-6 items-center text-2xl bg-[#000000ab] h-[100vh] flex-col justify-between pt-[100px] pb-[50px] font-NotoSans'>
			<div className='w-[500px] rounded-[50px]'>
				<div className='bg-[#ffffff1a] w-full py-[5px] relative rounded-[50px]'>
					<div className='bg-[#078041] w-[88%] h-full absolute top-0 left-0 rounded-[50px]'></div>
				</div>
				<p className='font-[400] mb-[10px] text-white text-[12px] leading-relaxed my-2'>Your Savings Calculation is <span className='text-[#FB7306]'>88%</span> Complete</p>
			</div>
			<div className='flex flex-col items-center'>
				<h1 className='font-[700] mb-[10px] text-white text-[3.3vw] leading-relaxed'>Final Step!</h1>
				<div className='flex justify-center mb-10'>
					<p className='font-[400] mb-[10px] text-white text-[1.4vw] leading-relaxed'>Complete The Final Step To See Savings!</p>
				</div>
				<div className='flex flex-col mb-5'>
					<div className='w-[320px] text-left m-1 mb-5'>
						<input type='text' value={phone} onChange={handlePhone} className='px-6 py-3 text-grey bg-white w-full rounded-[50px] text-[20px] h-[50px] m-1' placeholder='Enter phone number' />
						{
							inValidPhone &&
							<span className='font-[400] mb-[10px] ml-5 text-white text-[14px] leading-relaxed' >Please Enter a Valid US Phone Number</span>
						}
					</div>
					<button onClick={submitAll} className='flex items-center justify-center px-[50px] py-3 text-grey bg-[#078041] hover:bg-[#FB7306] text-[15px] h-[50px] w-[320px] rounded-[50px] text-[white] m-1'>VIEW MY SAVINGS</button>
				</div>
				<span className='text-[12px] text-white leading-[18px] w-[700px]'>
					By clicking the "View My Savings" button, you authorize Govsolarco.com and up to 4 solar partners to call you and send you pre-recorded messages and text messages at the number you entered above, using an autodialer, with offers about their products or services, even if your phone number is on any national or state "Do Not Call" list. Message and data rates may apply. Your consent here is not based on a condition of purchase.
				</span>
			</div>
			<div className='flex justify-center relative w-[90%]'>
				<p onClick={() => setStep('who')} className='font-[400] mb-[10px] text-white text-[15px] absolute left-0 cursor-pointer'>BACK</p>
			</div>
		</div>
	}
	{
		step === 'submitting' &&
		<div onClick={()=>navigate('/result')} className='flex p-6 items-center text-2xl bg-[#000000ab] h-[100vh] flex-col pt-[100px] pb-[50px] font-NotoSans justify-center'>
			<div className='flex flex-col items-center'>
				<h1 className='font-[700] mb-[10px] text-white text-[3.3vw] leading-relaxed'>Preparing Your Estimate...</h1>
				<div className='flex justify-center mb-10'>
					<p className='font-[400] mb-[10px] text-white text-[1.4vw] leading-relaxed'>This may take up to 30 seconds please wait.</p>
				</div>
			</div>
		</div>
	}
	</Layout>
  );
}
