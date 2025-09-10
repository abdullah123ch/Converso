// app/pricing/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    description: "Perfect for individuals starting out.",
    features: ["1 companion", "Basic support", "Community access"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Ideal for students and small teams.",
    features: ["5 companions", "Priority support", "Analytics dashboard"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    description: "Best for schools and institutions.",
    features: ["Unlimited companions", "Dedicated support", "Custom features"],
  },
]

export default function PricingPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-gray-600 mb-12">
          Choose the plan that fits your needs.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col justify-between shadow-lg rounded-2xl border ${
                plan.popular ? "border-pink-500 scale-105" : ""
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-3xl font-extrabold mt-2">{plan.price}</p>
                <p className="text-gray-500 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <ul className="text-gray-700 text-left space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-pink-600 hover:bg-pink-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
