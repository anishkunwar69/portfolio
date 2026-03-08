"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function CalEmbed() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "quick-consultation" });
            cal("ui", {
                theme: "light",
                cssVarsPerTheme: {
                    light: { "cal-brand": "#2563eb" },
                    dark: { "cal-brand": "#2563eb" },
                },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl relative"
        >
            <Cal
                namespace="quick-consultation"
                calLink="anish-kunwar-7lyj6e/quick-consultation"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "light" }}
            />
        </motion.div>
    );
}
