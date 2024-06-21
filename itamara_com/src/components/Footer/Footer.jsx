import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <>
                <div class="foot">
                    <h4>TELEFONES</h4>
                    <p>(31) 3105-0700</p>
                    <p>(31) 99894-8494</p>
                </div>
                <div class="foot">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.350666914301!2d-43.712745700000006!3d-20.285747399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4080ea528bff3%3A0x25d367c28e96ff1e!2sItamara%20Motel!5e0!3m2!1sen!2sbr!4v1718997641367!5m2!1sen!2sbr" 
                width="250rem" 
                height="250rem" 
                // style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="foot">
                    <h4>ENDEREÇOS</h4>
                    <p>Rodovia dos Incofidentes (BR-356), km 64, s/n</p>
                    <p>CEP: 35412-000, Coelhos | Ouro Preto - MG</p>

                    <p>atendimento@itamara.com.br</p>
                </div>
                <div class="foot">
                    [api trip advisor]
                </div>

            </>
        );
    };
};

export default Footer;