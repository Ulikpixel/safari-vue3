<template>
    <section>
        <div class="container py-16">
            <div class="grid grid-cols-3 gap-8">
                <box-component>
                    <form-component />
                </box-component>
                <div class="flex flex-col gap-8">
                    <box-component>
                        <delivery-component />
                    </box-component>
                    <box-component>
                        <payment-component />
                    </box-component>
                </div>
                <box-component>
                    <order-summary />
                </box-component>
            </div>
        </div>
    </section>
</template>

<script>
import BoxComponent from '@/components/Order/components/Box';
import FormComponent from '@/components/Order/components/Form';
import DeliveryComponent from '@/components/Order/components/Delivery';
import PaymentComponent from '@/components/Order/components/Payment';
import OrderSummary from '@/components/Order/components/OrderSummary';

export default {
    name: 'order-component',
    components: { 
        BoxComponent, 
        FormComponent,
        DeliveryComponent,
        PaymentComponent,
        OrderSummary,
    },
}
</script>
