import { useState } from 'react'
import './winxuu.scss'
import { AiFillWindows, AiFillGithub } from 'react-icons/ai'
import Template from './Template'
import SplitText, { SplitTextAnimationTypeEnum } from './SplitText'

const WinXUU = () => {
  const [tosIsActive, setTosIsActive] = useState<boolean>(false)

  if (tosIsActive) return (
    <Template>
      <a onClick={() => {
        setTosIsActive(false)
      }}>Back</a>
      <SplitText role={"heading"} elementType={'h1'} animationType={'bounce'}>Terms of Service</SplitText>
      <p>WIN X / U + U ("we," "us," or "the Company") provides WIN X / U + U ("the Service") which may involve the remote shutdown or termination of users' computers or devices. By using the Service, you ("the User") agree to the following terms:</p>

      <p>Acknowledgment of Risk: The User acknowledges and understands that the Service has the capability to remotely shut down or terminate the User's computer or device. The User expressly assumes any and all risks associated with the use of the Service, including any potential loss of data, interruptions, or damages resulting from the shutdown or termination of the User's computer or device.</p>

      <p>User's Responsibility: The User is solely responsible for ensuring that they have taken appropriate measures to safeguard their data and protect their computer or device against unauthorized access or potential damage. The User agrees to maintain regular backups of their data and implement necessary security measures to prevent any potential harm or loss resulting from the shutdown or termination of their computer or device.</p>

      <p>Limitation of Liability: To the fullest extent permitted by law, the Company shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, data, or other intangible losses, arising out of or in connection with the use or inability to use the Service or the remote shutdown or termination of the User's computer or device.</p>

      <p>Indemnification: The User agrees to indemnify, defend, and hold harmless the Company, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from or relating to the User's use of the Service or any violation of these terms.</p>

      <p>No Guarantee of Service Availability: The Company does not guarantee the availability or uninterrupted operation of the Service. The User acknowledges that the Service may be subject to technical limitations, downtime, or interruptions beyond the Company's control.</p>

      <p>Governing Law and Jurisdiction: These terms shall be governed by and construed in accordance with the laws of [your jurisdiction]. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in [your jurisdiction].</p>
    </Template>
  )

  return (
    <Template>
      <div className="column">
        <SplitText role={"heading"} elementType={'h1'} animationType={SplitTextAnimationTypeEnum.BOUNCE}>Improve your PC</SplitText>

        <p>
          Make your PC <br /><em><u>much</u></em> faster.
        </p>
        <ul>
            <li>Power efficiency</li>
            <li>Reduced eye strain</li>
            <li>Health benefits</li>
          </ul>
      </div>
      <div className="column">
        <SplitText role={"heading"} elementType={'h1'} animationType={SplitTextAnimationTypeEnum.BOUNCE}>Get Started</SplitText>
        <small>Revel in the blissful pause, shedding the digital cloak to unlock moments of pure presence.</small>
        <ol>
          <li>
            <span><AiFillWindows /></span> + X
          </li>
          <li>U + U</li>
          <li>Profit</li>
        </ol>
      </div>

      <footer>
        <a href="https://github.com/s33g/winxuu">
          <AiFillGithub style={{
            fontSize: '4rem',
          }} />
        </a>
        <a onClick={() => {
          setTosIsActive(true)
        }}>Terms</a>
      </footer>
    </Template>
  )
}

export default WinXUU
